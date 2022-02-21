import type {BlockNumber, ParaId} from '@polkadot/types/interfaces';
import {createWsEndpoints} from '@polkadot/apps-config/endpoints';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Context} from '../../types';
import type {LeasePeriod, Parachain, ParachainsInfo} from '../../generated/resolvers-types';
import {Result, getLastEvents, getLeasePeriod, getUpcomingParaIds} from '../../services/parachainsService';
import {BN, BN_ONE, formatNumber, bnToBn, bnToHex} from '@polkadot/util';

export async function parachainsInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<ParachainsInfo> {
  const [parachainIds, proposals, upcomingParaIds, leasePeriod] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.query.proposeParachain?.proposals?.entries(),
    getUpcomingParaIds(api),
    getLeasePeriod(api),
  ]);

  return {
    parachainsCount: parachainIds?.length ?? 0,
    parathreadsCount: upcomingParaIds.length,
    proposalsCount: proposals?.length ?? 0,
    leasePeriod,
  };
}

export async function parachains(_: Record<string, never>, __: Record<string, never>, {api}: Context): Promise<Promise<Parachain>[]> {
  const [parachainIds, genesisHash, lastEvents] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.genesisHash.toHex(),
    getLastEvents(api),
  ]);

  const startingEndpoints = createWsEndpoints((key: string, value: string | undefined) => value || key);
  const endpoints = startingEndpoints.filter(({genesisHashRelay}) => genesisHash === genesisHashRelay);

  const parachains = parachainIds.map(paraId => {
    const parachain = endpoints.find((e) => e.paraId === paraId.toNumber());

    if (!parachain) {
      return undefined;
    }

    return parachain;
  }).filter((elem) => elem !== undefined) as LinkOption[];

  return parachains.map((p) => extractParachainData(api, p, lastEvents));
}

export function parachain(_: Record<string, never>, params: {id: string}, {api}: Context) {
  throw new Error('Not implemented yet');
}

const extractParachainData = async (
  api: Context['api'],
  parachain: LinkOption | undefined,
  lastEvents: Result,
): Promise<Parachain> => {
  const id = parachain!.paraId!;

  const [leases, leasePeriod] = await Promise.all([
    api.query.slots?.leases?.(id) as any,
    getLeasePeriod(api),
  ]);

  const filteredLeases = leases.map((opt: { isSome: any; }, index: any) => (opt.isSome ? index : -1)).filter((period: number) => period !== -1);
  const period = leasePeriod?.currentLease && leases && getLeasePeriodString(bnToBn(leasePeriod.currentLease), filteredLeases);

  return {
    id: id.toString(),
    name: parachain!.text.toString(),
    lease: {
      period: period,
      blockTime: bnToHex(getBlocks(api, filteredLeases, leasePeriod)),
    },
    lifecycle: "",
    lastIncludedBlock: lastEvents.lastIncluded[id]?.blockNumber?.toString() ?? "",
    lastBackedBlock: lastEvents.lastBacked[id]?.blockNumber?.toString() ?? "",
    homepage: parachain!.homepage,
    validators: undefined,
    nonVoters: undefined,
  };
}

function getBlocks(api: Context['api'], leases: any, leasePeriod: LeasePeriod) {
  const length = api.consts.slots.leasePeriod as BlockNumber;
  const lastLease = leases ? leases[leases.length - 1] : null;
  const leaseValue = lastLease ? lastLease + 1 : null;
  return leasePeriod && leaseValue && bnToBn(leaseValue).sub(BN_ONE).imul(length).iadd(bnToBn(leasePeriod.remainder));
}

function getLeasePeriodString(currentPeriod: BN, leases: number[]): string {
  return leases
    .reduce((all: [BN, BN][], _period): [BN, BN][] => {
      const bnp = currentPeriod.addn(_period);

      if (!all.length || all[all.length - 1]?.[1].add(BN_ONE).lt(bnp)) {
        all.push([bnp, bnp]);
      } else {
        const bn = all[all.length - 1];
        bn ? (bn[1] = bnp) : null;
      }

      return all;
    }, [])
    .map(([a, b]) => (a.eq(b) ? formatNumber(a) : `${formatNumber(a)} - ${formatNumber(b)}`))
    .join(', ');
}
