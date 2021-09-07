import { ApiPromise } from '@polkadot/api';
import { ClassType } from 'nft-models';
import { saveEvent, updateClassIssuance, saveToken } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MergedToken
  [owner, classId, tokenId]: [string, number, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({
    name: 'MergedToken',
    data: [owner, classId, tokenId],
  });

  // #335 todo mark used token

  await saveToken(api, classId, tokenId, ClassType.Merge);

  await updateClassIssuance(api, classId);
}
