import type { ParaId } from '@polkadot/types/interfaces';
import type { Context } from '../../types';
import type { ParachainsInfo } from '../../generated/resolvers-types';

import {
  getLeasePeriod,
  getUpcomingParaIds,
} from '../../services/parachainsService';

export async function parachainsInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<ParachainsInfo> {
  const parachainIds = await api.query.paras?.parachains?.<ParaId[]>();
  const proposals = await api.query.proposeParachain?.proposals?.entries();
  const upcomingParaIds = await getUpcomingParaIds(api);
  const leasePeriod = await getLeasePeriod(api);

  return {
    parachainsCount: parachainIds?.length ?? 0,
    parathreadsCount: upcomingParaIds.length,
    proposalsCount: proposals?.length ?? 0,
    leasePeriod,
  };
}
