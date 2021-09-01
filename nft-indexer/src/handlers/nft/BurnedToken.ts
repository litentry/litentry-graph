import { ApiPromise } from '@polkadot/api';
import { saveEvent, updateClassIssuance } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.BurnedToken
  [owner, classId, tokenId]: [string, number, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({
    name: 'BurnedToken',
    data: [owner, classId, tokenId],
  });

  // todo confirm this is relevant?
  await updateClassIssuance(api, classId);
}
