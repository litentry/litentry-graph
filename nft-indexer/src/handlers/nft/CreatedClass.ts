import type { ApiPromise } from '@polkadot/api';
import { saveEvent, saveClass } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.CreatedClass
  [address, classId]: [string, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({ name: 'CreatedClass', data: [address, classId] });

  await saveClass(api, classId);
}
