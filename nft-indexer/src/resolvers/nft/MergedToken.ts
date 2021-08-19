import type { ApiPromise } from '@polkadot/api';
import { saveEvent } from '../../repositories/events';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MergedToken
  [owner, class_id]: [string, number]
): Promise<void> {
  await saveEvent({
    name: 'MergedToken',
    data: [owner, class_id],
  });
}
