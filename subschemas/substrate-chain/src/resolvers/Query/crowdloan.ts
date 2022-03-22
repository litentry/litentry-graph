import {BN, BN_ZERO} from '@polkadot/util';
import type {BlockNumber} from '@polkadot/types/interfaces';
import type {ParaId} from '@polkadot/types/interfaces';
import type {Context} from '../../types';
import {CrowdloanSummary, CrowdloanStatus, Crowdloan, Depositor, Contribution} from '../../generated/resolvers-types';
import {getFunds, extractActiveFunds, extractEndedFunds, extractFunds} from '../../services/crowdloanService';
import {getLeasePeriod} from '../../services/parachainsService';
import {formatBalance, getBlockTime} from '../../services/substrateChainService';
import {getEndpoints} from '../../utils/endpoints';
import {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Campaign} from '../../services/crowdloanService';

export async function crowdloanSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanSummary> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);

  const activeFunds = extractActiveFunds(data.funds, leasePeriod);
  const [activeRaised, activeCap] = activeFunds.reduce(
    ([par, pac], current) => {
      return [
        par.iadd(current.info.raised.gte(BN_ZERO) ? current.info.raised : BN_ZERO),
        pac.iadd(current.info.cap.gte(BN_ZERO) ? current.info.cap : BN_ZERO),
      ];
    },
    [new BN(0), new BN(0)],
  );

  const activeProgress = activeCap.isZero() ? 0 : activeRaised.muln(10000).div(activeCap).toNumber() / 10000;
  const totalProgress = data.totalCap.isZero() ? 0 : data.totalRaised.muln(10000).div(data.totalCap).toNumber() / 10000;

  return {
    activeCap: activeCap.toString(),
    formattedActiveCap: formatBalance(api, activeCap),
    activeRaised: activeRaised.toString(),
    formattedActiveRaised: formatBalance(api, activeRaised),
    activeProgress,
    totalCap: data.totalCap.toString(),
    formattedTotalCap: formatBalance(api, data.totalCap),
    totalRaised: data.totalRaised.toString(),
    formattedTotalRaised: formatBalance(api, data.totalRaised),
    totalProgress,
    totalFunds: data.funds.length,
  };
}

interface CrowdloanInfo extends Omit<Crowdloan, 'depositor' | 'contribution'> {
  depositor: PartialDepositor;
  contribution: PartialContribution;
}

export type PartialDepositor = Omit<Depositor, 'account'>;

export type PartialContribution = Omit<Contribution, 'contribution'>;

export async function activeCrowdloans(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanInfo[]> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);
  const activeFunds = extractActiveFunds(data.funds, leasePeriod);
  const endpoints = getEndpoints(api);
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const currentPeriod = bestNumber.div(leasePeriodLength);

  return activeFunds.map((fund) => getCrowdloanDetail(fund, currentPeriod, bestNumber, api, endpoints));
}

export async function endedCrowdloans(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanInfo[]> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);
  const endedFunds = extractEndedFunds(data.funds, leasePeriod);
  const endpoints = getEndpoints(api);
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const currentPeriod = bestNumber.div(leasePeriodLength);

  return endedFunds.map((fund) => getCrowdloanDetail(fund, currentPeriod, bestNumber, api, endpoints));
}

export async function crowdloans(
  _: Record<string, never>,
  {status}: {status?: CrowdloanStatus | undefined | null},
  {api}: Context,
): Promise<CrowdloanInfo[]> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);
  const funds = extractFunds(status, data.funds, leasePeriod);
  const endpoints = getEndpoints(api);
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const currentPeriod = bestNumber.div(leasePeriodLength);

  return funds.map((fund) => getCrowdloanDetail(fund, currentPeriod, bestNumber, api, endpoints));
}

export async function crowdloan(
  _: Record<string, never>,
  {paraId: key}: {paraId: string},
  {api}: Context,
): Promise<CrowdloanInfo | null> {
  const paraIdKeys = await api.query.crowdloan?.funds?.keys<[ParaId]>();
  const paraIdKey = paraIdKeys.find(({args: [paraId]}) => paraId.toString() === key);

  if (paraIdKey) {
    const {
      args: [paraId],
    } = paraIdKey;
    const bestNumber = await api.derive.chain.bestNumber();
    const data = await getFunds([paraId], bestNumber, api);
    const endpoints = getEndpoints(api);
    const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
    const currentPeriod = bestNumber.div(leasePeriodLength);

    return data.funds.reduce(
      (_, fund) => getCrowdloanDetail(fund, currentPeriod, bestNumber, api, endpoints),
      {} as CrowdloanInfo,
    );
  }

  return null;
}

function getCrowdloanDetail(
  fund: Campaign,
  currentPeriod: BN,
  bestNumber: BlockNumber,
  api: Context['api'],
  endpoints: LinkOption[],
) {
  const {info, isWinner, isCapped, isEnded, firstSlot, paraId} = fund;
  const {end, firstPeriod, lastPeriod, cap, raised, depositor} = info;
  const blocksLeft = end.gt(bestNumber) ? end.sub(bestNumber) : BN_ZERO;
  const isOngoing = !(isCapped || isEnded || isWinner) && currentPeriod.lte(firstSlot);
  const status = isWinner ? 'Winner' : blocksLeft ? (isCapped ? 'Capped' : isOngoing ? 'Active' : 'Past') : 'Ended';
  const ending = getBlockTime(api, blocksLeft);
  const parachain = endpoints.find((e) => e.paraId === paraId.toNumber());
  const raisedPercentage = cap.isZero() ? 100 : raised.muln(10000).div(cap).toNumber() / 10000;

  return {
    paraId: paraId.toString(),
    name: parachain?.text?.toString() ?? `#${paraId.toString()}`,
    homepage: parachain?.homepage ?? null,
    depositor: {address: depositor.toString()},
    status,
    ending: ending.timeStringParts,
    firstPeriod: firstPeriod.toString(),
    lastPeriod: lastPeriod.toString(),
    raised: raised.toString(),
    formattedRaised: formatBalance(api, raised),
    raisedPercentage: String(raisedPercentage),
    cap: cap.toString(),
    formattedCap: formatBalance(api, cap),
    contribution: {paraId: paraId.toString()},
  };
}
