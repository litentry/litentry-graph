import type { AccountInfo } from '@polkadot/types/interfaces/system';
import type { Balance } from '../../generated/resolvers-types';
import { formatBalance } from '../../services/substrateChainService';
import type { Context } from '../../types';

export default async function balance(
  _: Record<string, never>,
  { address, blockNumber }: { address: string; blockNumber?: number | null },
  { api }: Context,
): Promise<Balance> {
  let raw: AccountInfo;

  if (blockNumber) {
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    raw = await (await api.at(blockHash)).query.system.account(address);
  } else {
    raw = await api.query.system.account(address);
  }

  const total = raw.data.free.add(raw.data.reserved);
  const reserved = raw.data.reserved;
  const free = raw.data.free;
  const feeFrozen = raw.data.feeFrozen;
  const miscFrozen = raw.data.miscFrozen;

  return {
    nonce: raw.nonce.toNumber(),
    consumers: raw.consumers.toNumber(),
    providers: raw.providers.toNumber(),
    sufficients: raw.sufficients.toNumber(),
    data: {
      total: total.toString(),
      formattedTotal: formatBalance(api, total),
      reserved: reserved.toString(),
      formattedReserved: formatBalance(api, reserved),
      free: free.toString(),
      formattedFree: formatBalance(api, free),
      feeFrozen: feeFrozen.toString(),
      formattedFeeFrozen: formatBalance(api, feeFrozen),
      miscFrozen: miscFrozen.toString(),
      formattedMiscFrozen: formatBalance(api, miscFrozen),
    },
  };
}
