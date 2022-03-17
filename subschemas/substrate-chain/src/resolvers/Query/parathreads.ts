import type {Option, StorageKey} from '@polkadot/types';
import type {ITuple} from '@polkadot/types/types';
import type {ParaId, AccountId, BalanceOf, BlockNumber} from '@polkadot/types/interfaces';
import type {
  PolkadotRuntimeParachainsParasParaLifecycle,
  PolkadotRuntimeCommonParasRegistrarParaInfo,
} from '@polkadot/types/lookup';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import {BN, BN_ONE} from '@polkadot/util';
import {bnToBn} from '@polkadot/util';
import {Parathread} from '../../generated/resolvers-types';
import {Context} from '../../types';
import {getLeasePeriodString} from '../../services/parachainsService';
import {notEmpty} from '../../utils/notEmpty';
import {getBlockTime} from '../../services/substrateChainService';
import {getEndpoints} from '../../utils/endpoints';
import {PartialNestedAccount} from './account';

type ParaIdEntries = [StorageKey<[ParaId]>, Option<PolkadotRuntimeParachainsParasParaLifecycle>][];

type LeaseInfo = {
  accountId: AccountId;
  balance: BalanceOf;
  period: number;
};

export interface LeasePeriod {
  currentPeriod: BN;
  length: BN;
  progress: BN;
  remainder: BN;
}

type LeaseOptions = Option<ITuple<[AccountId, BalanceOf]>>[];

type ParaMap = {
  id: ParaId;
  leases: LeaseInfo[];
};

interface ParathreadData extends Omit<Parathread, 'manager'> {
  manager: PartialNestedAccount;
}

export async function parathreads(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<ParathreadData[]> {
  const paraLifecycles = (await api.query.paras?.paraLifecycles?.entries()) as ParaIdEntries;
  const parathreadIds = paraLifecycles ? extractIds(paraLifecycles) : [];
  const endpoints = getEndpoints(api);
  const hasLinksMap = isParasLinked(parathreadIds, endpoints);
  const leases = (await api.query.slots.leases.multi(parathreadIds)) as unknown as LeaseOptions[];
  const paraMap = extractParaMap(hasLinksMap, parathreadIds, leases);
  const length = api.consts.slots.leasePeriod as BlockNumber;
  const bestNumber = await api.derive.chain.bestNumber();
  const currentPeriod = bestNumber.div(length);

  const parathreads = Promise.all(
    paraMap.map(async (para) => {
      const optInfo = (await api.query.registrar.paras(para.id)) as Option<PolkadotRuntimeCommonParasRegistrarParaInfo>;
      const parathreadLink = endpoints.find((endpoint) => endpoint.paraId?.toString() === para.id.toString());
      const progress = bestNumber.mod(length);
      const leasePeriod = {
        currentPeriod,
        length,
        progress,
        remainder: length.sub(progress),
      };
      const {periodString, blocks} = parseLeases({leasePeriod, leases: para.leases});

      return {
        id: para.id.toString(),
        manager: {address: optInfo.isSome ? optInfo.unwrap().manager.toString() : ''},
        name: parathreadLink?.text ?? null,
        homepage: parathreadLink?.homepage ?? null,
        lease: {
          period: periodString,
          blockTime: getBlockTime(api, blocks).timeStringParts,
        },
      };
    }),
  );

  return parathreads;
}

function isParasLinked(ids: ParaId[], endpoints: LinkOption[]) {
  return ids.reduce(
    (all: Record<string, boolean>, id) => ({
      ...all,
      [id.toString()]: extractParaEndpoints(endpoints, id).length !== 0,
    }),
    {},
  );
}

function parseLeases({leases, leasePeriod}: {leases: LeaseInfo[]; leasePeriod: LeasePeriod}) {
  const leasesPeriods = leases?.map((lease) => lease?.period).filter(notEmpty);
  const periodString = getLeasePeriodString(leasePeriod.currentPeriod, leasesPeriods);

  const periods = leasePeriod?.currentPeriod ? leasesPeriods : undefined;
  const firstPeriod = periods?.[0];

  const blocks =
    leasePeriod && firstPeriod && bnToBn(firstPeriod).sub(BN_ONE).imul(leasePeriod.length).iadd(leasePeriod.remainder);

  return {periodString, blocks};
}

function extractParaEndpoints(allEndpoints: LinkOption[], paraId: BN | number): LinkOption[] {
  const numId = bnToBn(paraId).toNumber();

  return allEndpoints.filter(({paraId}) => paraId === numId);
}

function extractIds(entries: ParaIdEntries): ParaId[] {
  return entries
    .map(
      ([
        {
          args: [paraId],
        },
        optValue,
      ]): ParaId | null => {
        const value = optValue.unwrap();

        return value &&
          (value.isParathread || value.isUpgradingParathread || value.isOffboardingParathread || value.isOnboarding)
          ? paraId
          : null;
      },
    )
    .filter((paraId): paraId is ParaId => !!paraId)
    .sort((a, b) => a.cmp(b));
}

function extractParaMap(hasLinksMap: Record<string, boolean>, paraIds: ParaId[], leases: LeaseOptions[]): ParaMap[] {
  return paraIds
    .reduce((all: ParaMap[], id, index): ParaMap[] => {
      all.push({
        id,
        leases: leases[index]
          .map((optLease, period): LeaseInfo | null => {
            if (optLease.isNone) {
              return null;
            }

            const [accountId, balance] = optLease.unwrap();

            return {
              accountId,
              balance,
              period,
            };
          })
          .filter((item): item is LeaseInfo => !!item),
      });

      return all;
    }, [])
    .sort(({id: aId, leases: aLeases}, {id: bId, leases: bLeases}): number => {
      const aKnown = hasLinksMap[aId.toString()] || false;
      const bKnown = hasLinksMap[bId.toString()] || false;

      return aLeases.length && bLeases.length
        ? aLeases[0].period - bLeases[0].period || aId.cmp(bId)
        : aLeases.length
        ? -1
        : bLeases.length
        ? 1
        : aKnown === bKnown
        ? aId.cmp(bId)
        : aKnown
        ? -1
        : 1;
    });
}
