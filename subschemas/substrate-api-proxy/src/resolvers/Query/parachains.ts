import type { Option, StorageKey } from '@polkadot/types';
import type { ParaId } from '@polkadot/types/interfaces';
import type { PolkadotRuntimeParachainsParasParaLifecycle } from '@polkadot/types/lookup';
import type { Context } from '../../types';
import type { ParachainsInfo } from '../../generated/resolvers-types';

import { getLeasePeriod } from '../../services/parachainsService';

type ParaIdEntries = [
  StorageKey<[ParaId]>,
  Option<PolkadotRuntimeParachainsParasParaLifecycle>,
][];

export async function parachainsInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<ParachainsInfo> {
  const parachainIds = await api.query.paras?.parachains?.<ParaId[]>();
  const proposals = await api.query.proposeParachain?.proposals?.entries();
  const paraIdEntries = (await api.query.paras?.paraLifecycles?.entries()) as
    | ParaIdEntries
    | undefined;
  const upcomingParaIds = extractUpcomingParaIds(paraIdEntries);
  const leasePeriod = await getLeasePeriod(api);

  return {
    parachainsCount: parachainIds?.length ?? 0,
    parathreadsCount: upcomingParaIds.length,
    proposalsCount: proposals?.length ?? 0,
    leasePeriod,
  };
}

function extractUpcomingParaIds(entries: ParaIdEntries = []): ParaId[] {
  return entries
    .map(
      ([
        {
          args: [paraId],
        },
        optValue,
      ]): ParaId | null => {
        const value = optValue.unwrapOr(null);

        return value &&
          (value.isParathread ||
            value.isUpgradingParathread ||
            value.isOffboardingParathread ||
            value.isOnboarding)
          ? paraId
          : null;
      },
    )
    .filter((paraId): paraId is ParaId => !!paraId)
    .sort((a, b) => a.cmp(b));
}
