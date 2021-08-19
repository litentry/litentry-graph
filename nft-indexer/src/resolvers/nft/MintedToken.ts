import type { ApiPromise } from '@polkadot/api';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MintedToken
  [from, to, class_id, quantity]: [string, string, number, number]
): Promise<void> {
  console.log('EVENT:MintedToken', {
    from,
    to,
    class_id,
    quantity,
  });
}
