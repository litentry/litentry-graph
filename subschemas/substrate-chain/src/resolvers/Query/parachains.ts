import type {ParaId} from '@polkadot/types/interfaces';
import {createWsEndpoints} from '@polkadot/apps-config/endpoints';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Context} from '../../types';
import type {Parachain, ParachainsInfo} from '../../generated/resolvers-types';
import {Result, getLastEvents, getLeasePeriod, getUpcomingParaIds, getBlocks, getLeasePeriodString} from '../../services/parachainsService';
import {bnToBn, bnToHex} from '@polkadot/util';

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
