import type { ApiPromise } from '@polkadot/api';
import type { AccountInfo } from '@polkadot/types/interfaces/system';
import BN from 'bignumber.js';
import type { Context } from '../../types';

export default async function balance(
  _: Record<string, never>,
  { address, blockNumber }: { address: string; blockNumber?: number | null },
  { api }: Context,
): Promise<{
  nonce: number;
  consumers: number;
  providers: number;
  sufficients: number;
  data: {
    free: number;
    reserved: number;
    miscFrozen: number;
    feeFrozen: number;
  };
}> {
  let raw: AccountInfo;

  if (blockNumber) {
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    raw = await (await api.at(blockHash)).query.system.account(address);
  } else {
    raw = await api.query.system.account(address);
  }

  return {
    nonce: raw.nonce.toNumber(),
    consumers: raw.consumers.toNumber(),
    providers: raw.providers.toNumber(),
    sufficients: raw.sufficients.toNumber(),
    data: {
      free: format(raw.data.free.toNumber(), api),
      reserved: format(raw.data.reserved.toNumber(), api),
      miscFrozen: format(raw.data.miscFrozen.toNumber(), api),
      feeFrozen: format(raw.data.feeFrozen.toNumber(), api),
    },
  };
}

const format = (amount: number, api: ApiPromise): number =>
  new BN(amount).shiftedBy(-api.registry.chainDecimals).toNumber();
