import type { ApiPromise } from '@polkadot/api';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MergedToken
  [owner, class_id]: [string, number]
): Promise<void> {
  console.log('EVENT:MergedToken', {
    owner,
    class_id,
  });
}
