import type { BlockNumber } from '@polkadot/types/interfaces';
import type { LeasePeriod } from '../generated/resolvers-types';

import { Context } from '../types';
import { BN_ZERO, formatNumber, BN_ONE, BN_HUNDRED } from '@polkadot/util';
import { getBlockTime } from '../services/relayChainService';

export async function getLeasePeriod(
  api: Context['api'],
): Promise<LeasePeriod> {
  const bestNumber = await api.derive.chain.bestNumber();
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const { formattedTime: totalPeriod } = getBlockTime(api, leasePeriodLength);
  const startNumber = bestNumber.sub(
    (api.consts.slots.leaseOffset as BlockNumber) || BN_ZERO,
  );
  const currentPeriod = startNumber.div(leasePeriodLength);
  const progress = startNumber.mod(leasePeriodLength);
  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(leasePeriodLength ?? BN_ONE)
    .toNumber();
  const periodRemainder = leasePeriodLength.sub(progress);
  const { formattedTime: remainder } = getBlockTime(api, periodRemainder);

  return {
    currentLease: formatNumber(currentPeriod),
    totalPeriod,
    progressPercent,
    remainder,
  };
}
