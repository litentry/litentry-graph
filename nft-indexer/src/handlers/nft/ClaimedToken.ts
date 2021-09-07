import type { ApiPromise } from '@polkadot/api';
import { ClassType } from 'nft-models';
import { saveEvent } from '../../services';
import { saveToken, updateClassIssuance } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.ClaimedToken
  [claimer, classId, tokenId]: [string, number, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({
    name: 'ClaimedToken',
    data: [claimer, classId, tokenId],
  });

  await saveToken(api, classId, tokenId, ClassType.Claim);

  await updateClassIssuance(api, classId);
}
