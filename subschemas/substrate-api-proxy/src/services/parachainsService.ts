import type {BlockNumber, ParaId} from '@polkadot/types/interfaces';
import type {PolkadotRuntimeParachainsParasParaLifecycle} from '@polkadot/types/lookup';
import type {Option, StorageKey} from '@polkadot/types';
import type {LeasePeriod} from '../generated/resolvers-types';
import type {Context} from '../types';

import {BN_ZERO, formatNumber, BN_ONE, BN_HUNDRED} from '@polkadot/util';
import {getBlockTime} from '../services/substrateChainService';

type ParaIdEntries = [StorageKey<[ParaId]>, Option<PolkadotRuntimeParachainsParasParaLifecycle>][];

export async function getLeasePeriod(api: Context['api']): Promise<LeasePeriod> {
  const bestNumber = await api.derive.chain.bestNumber();
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const {formattedTime: totalPeriod} = getBlockTime(api, leasePeriodLength);
  const startNumber = bestNumber.sub((api.consts.slots.leaseOffset as BlockNumber) || BN_ZERO);
  const currentPeriod = startNumber.div(leasePeriodLength);
  const progress = startNumber.mod(leasePeriodLength);
  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(leasePeriodLength ?? BN_ONE)
    .toNumber();
  const periodRemainder = leasePeriodLength.sub(progress);
  const {formattedTime: remainder} = getBlockTime(api, periodRemainder);

  return {
    currentLease: formatNumber(currentPeriod),
    totalPeriod,
    progressPercent,
    remainder,
  };
}

export async function getUpcomingParaIds(api: Context['api']) {
  const paraIdEntries = (await api.query.paras?.paraLifecycles?.entries()) as ParaIdEntries | undefined;

  return extractUpcomingParaIds(paraIdEntries);
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
          (value.isParathread || value.isUpgradingParathread || value.isOffboardingParathread || value.isOnboarding)
          ? paraId
          : null;
      },
    )
    .filter((paraId): paraId is ParaId => !!paraId)
    .sort((a, b) => a.cmp(b));
}
