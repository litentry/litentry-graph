import type {LeasePeriod} from '../generated/resolvers-types';
import {ApiPromise} from '@polkadot/api';
import type {Option} from '@polkadot/types';
import type {ITuple} from '@polkadot/types/types';
import {BN, stringToU8a, u8aConcat} from '@polkadot/util';
import {encodeAddress} from '@polkadot/util-crypto';
import type {ParaId, BlockNumber, FundInfo, AccountId, BalanceOf} from '@polkadot/types/interfaces';

const CROWD_PREFIX = stringToU8a('modlpy/cfund');

type Campaign = {
  info: FundInfo;
  isCapped?: boolean;
  isEnded?: boolean;
  isWinner?: boolean;
  isSpecial: boolean;
  accountId: String;
  firstSlot: BN;
  isCrowdloan: boolean;
  key: string;
  lastSlot: BN;
  paraId: ParaId;
  value: BN;
};

interface Campaigns {
  funds: Campaign[];
  totalCap: BN;
  totalRaised: BN;
}

export async function getFunds(paraIds: ParaId[], bestNumber: BlockNumber, api: ApiPromise): Promise<Campaigns> {
  const [rawFunds, rawLeases] = await Promise.all([
    api.query.crowdloan.funds.multi<Option<FundInfo>>(paraIds),
    api.query.slots.leases.multi(paraIds) as unknown as Option<ITuple<[AccountId, BalanceOf]>>[][],
  ]);
  const funds = rawFunds ? optFundMulti.transform(paraIds, rawFunds, api.runtimeChain.toString()) : [];
  const leases = optLeaseMulti.transform(paraIds, rawLeases ?? []);
  const minContribution = api?.consts.crowdloan?.minContribution as unknown as BN;
  return createResult(bestNumber, minContribution, funds, leases);
}

const optFundMulti = {
  transform: (paraIds: ParaId[], optFunds: Option<FundInfo>[], network: string): Campaign[] =>
    paraIds
      .map((paraId, i): [ParaId, FundInfo | null] => [paraId, optFunds?.[i]?.unwrapOr(null) ?? null])
      .filter((v): v is [ParaId, FundInfo] => !!v[1])
      .map(([paraId, info]): Campaign => {
        const key = paraId.toString();
        const isLitentryParachain = network.toLowerCase() === 'polkadot' && key === '2013';
        const isLitmusParachain = network.toLowerCase() === 'kusama' && key === '2106';
        return {
          accountId: encodeAddress(createAddress(paraId)),
          firstSlot: info.firstPeriod,
          info,
          isCrowdloan: true,
          key,
          lastSlot: info.lastPeriod,
          paraId,
          value: info.raised,
          isSpecial: isLitentryParachain || isLitmusParachain,
        };
      })
      .sort((a, b) => {
        if (a.isSpecial || b.isSpecial) {
          return a.isSpecial && b.isSpecial ? 0 : b.isSpecial ? 1 : -1;
        }

        return (
          a.info.end.cmp(b.info.end) ||
          a.info.firstPeriod.cmp(b.info.firstPeriod) ||
          a.info.lastPeriod.cmp(b.info.lastPeriod) ||
          a.paraId.cmp(b.paraId)
        );
      }),
};

const optLeaseMulti = {
  transform: (paraIds: ParaId[], leases: Option<ITuple<[AccountId, BalanceOf]>>[][]): ParaId[] =>
    paraIds.filter(
      (paraId, i) =>
        (leases[i] ?? [])
          .map((o) => o.unwrapOr(null))
          .filter((v): v is ITuple<[AccountId, BalanceOf]> => !!v)
          .filter(([accountId]) => isCrowdloanAccount(paraId, accountId)).length !== 0,
    ),
};

// compare the current campaigns against the previous, manually adding ending and calculating the new totals
function createResult(bestNumber: BlockNumber, minContribution: BN, funds: Campaign[], leased: ParaId[]): Campaigns {
  const [totalRaised, totalCap] = funds.reduce(
    ([tr, tc], {info: {cap, raised}}) => [tr.iadd(raised), tc.iadd(cap)],
    [new BN(0), new BN(0)],
  );

  return {
    funds: funds.map((c) => updateFund(bestNumber, minContribution, c, leased)).sort(sortCampaigns),
    totalCap,
    totalRaised,
  };
}

const EMPTY_U8A = new Uint8Array(32);
function createAddress(paraId: ParaId): Uint8Array {
  return u8aConcat(CROWD_PREFIX, paraId.toU8a(), EMPTY_U8A).subarray(0, 32);
}

function isCrowdloanAccount(paraId: ParaId, accountId: AccountId): boolean {
  return accountId.eq(createAddress(paraId));
}

function sortCampaigns(a: Campaign, b: Campaign): number {
  return a.isWinner !== b.isWinner
    ? a.isWinner
      ? -1
      : 1
    : a.isCapped !== b.isCapped
    ? a.isCapped
      ? -1
      : 1
    : a.isEnded !== b.isEnded
    ? a.isEnded
      ? 1
      : -1
    : 0;
}

// map into a campaign
function updateFund(bestNumber: BN, minContribution: BN, data: Campaign, leased: ParaId[]): Campaign {
  data.isCapped = data.info.cap.sub(data.info.raised).lt(minContribution);
  data.isEnded = bestNumber.gt(data.info.end);
  data.isWinner = hasLease(data.paraId, leased);

  return data;
}

function hasLease(paraId: ParaId, leased: ParaId[]): boolean {
  return leased.some((l) => l.eq(paraId));
}

export function extractActiveFunds(funds: Campaign[], leasePeriod: LeasePeriod): Campaign[] {
  const currentPeriod = new BN(leasePeriod.currentLease);
  return funds.filter(
    ({firstSlot, isCapped, isEnded, isWinner}) => !(isCapped || isEnded || isWinner) && currentPeriod.lte(firstSlot),
  );
}

export function extractEndedFunds(funds: Campaign[], leasePeriod: LeasePeriod): Campaign[] {
  const currentPeriod = new BN(leasePeriod.currentLease);
  return funds.filter(
    ({firstSlot, isCapped, isEnded, isWinner}) => isCapped || isEnded || isWinner || currentPeriod.gt(firstSlot),
  );
}

export function extractParaIds(funds: Campaign[]): ParaId[] {
  return funds.map(({paraId}) => paraId);
}
