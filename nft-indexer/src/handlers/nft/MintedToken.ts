import type { ApiPromise } from '@polkadot/api';
import { ClassType } from 'nft-models';
import { saveEvent, saveToken, updateClassIssuance } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MintedToken
  [from, to, classId, startTokenId, quantity]: [
    string,
    string,
    number,
    number,
    number
  ],
  api: ApiPromise
): Promise<void> {
  await saveEvent({
    name: 'MintedToken',
    data: [from, to, classId, startTokenId, quantity],
  });

  const endTokenId = startTokenId + quantity;
  const tokenIds: number[] = [];
  for (let tokenId = startTokenId; tokenId < endTokenId; tokenId++) {
    tokenIds.push(tokenId);
  }

  await Promise.all(
    tokenIds.map((tokenId) =>
      saveToken(api, classId, tokenId, ClassType.Simple)
    )
  );

  await updateClassIssuance(api, classId);
}
