import type { ApiPromise } from '@polkadot/api';
import { saveEvent } from '../../repositories/events';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.DestroyedClass
  [owner, class_id]: [string, number]
): Promise<void> {
  await saveEvent({
    name: 'DestroyedClass',
    data: [owner, class_id],
  });
}
