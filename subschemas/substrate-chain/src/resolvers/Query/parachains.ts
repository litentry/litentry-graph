import {ApiPromise} from '@polkadot/api';
import type {Option} from '@polkadot/types';
import type {ParaId, ParaLifecycle} from '@polkadot/types/interfaces';
import {createWsEndpoints} from '@polkadot/apps-config/endpoints';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Context} from '../../types';
import type {Parachain, ParachainsInfo} from '../../generated/resolvers-types';
import {getLeasePeriod, getUpcomingParaIds} from '../../services/parachainsService';

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
  const [parachainIds, genesisHash] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.genesisHash.toHex(),
  ]);

  const startingEndpoints = createWsEndpoints((key: string, value: string | undefined) => value || key);
  const endpoints = startingEndpoints.filter(({genesisHashRelay}) => genesisHash === genesisHashRelay);

  // return await enrichParachainArray(api, parachains, endpoints);
  const parachains = parachainIds.map(paraId => {
    const parachain = endpoints.find((e) => e.paraId === paraId.toNumber());

    if (!parachain) {
      return undefined;
    }

    return parachain;
  }).filter((elem) => elem !== undefined) as LinkOption[];

  return parachains.map((p) => extractParachainData(api, p));
}

export function parachain(_: Record<string, never>, params: {id: string}, {api}: Context) {
  throw new Error('Not implemented yet');
}

const extractParachainData = async (
  api: ApiPromise,
  parachain: LinkOption | undefined,
): Promise<Parachain> => {
  const id = parachain!.paraId!;

  const [leases, optLifecycle] = await Promise.all([
    api.query.slots?.leases?.(id),
    api.query.paras?.paraLifecycles?.<Option<ParaLifecycle>>(id)
  ]);

  console.log(optLifecycle?.unwrap());
  console.log(leases);

  console.dir(JSON.stringify(parachain));
  return {
    id: id.toString(),
    name: parachain!.text.toString(),
    lease: {
      period: undefined,
      blockTime: undefined,
    },
    lifecycle: "",
    lastIncludedBlock: "",
    lastBackedBlock: "",
    homepage: parachain!.homepage,
  };
}
