import type {Conviction} from '../../generated/resolvers-types';
import type {Context} from '../../types';

import BN from 'bn.js';
import {BN_THOUSAND} from '@polkadot/util';
import {getBlockTime} from '../../services/substrateChainService';

const CONVICTIONS: number[] = [1, 2, 4, 8, 16, 32];
const SEC_DAY = 60 * 60 * 24;

export async function convictions(_: Record<string, never>, __: Record<string, never>, {api}: Context) {
  const {blockTime} = getBlockTime(api);

  return [
    {text: '0.1x voting balance, no lockup period', value: 0},
    ...CONVICTIONS.map((lock, index): Conviction => {
      const value = index + 1;
      const bnLock = new BN(lock);
      const period = (
        bnLock.mul(api.consts.democracy.enactmentPeriod.muln(blockTime).div(BN_THOUSAND)).toNumber() / SEC_DAY
      ).toFixed(2);
      return {
        text: `${value}x voting balance, locked for ${lock}x enactment (${period} days)`,
        value,
      };
    }),
  ];
}
