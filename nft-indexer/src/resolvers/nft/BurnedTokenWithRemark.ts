import type { ApiPromise } from '@polkadot/api';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.BurnedTokenWithRemark
  [owner, class_id, token_id, remark_hash]: [string, number, number, string]
): Promise<void> {
  console.log('EVENT:BurnedTokenWithRemark', {
    owner,
    class_id,
    token_id,
    remark_hash,
  });
}
