import type { ApiPromise } from '@polkadot/api';
import type { Token } from 'nft-models';
import { ClassType, TokenModel } from 'nft-models';
import { saveEvent } from '../../services';
import {
  getMetadata,
  queryClass,
  queryToken,
  updateClassIssuance,
} from '../../services';

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
    tokenIds.map((tokenId) => saveMintedToken(api, classId, tokenId))
  );

  await updateClassIssuance(api, classId);
}

async function saveMintedToken(
  api: ApiPromise,
  classId: number,
  tokenId: number
) {
  const [tokenData, classData] = await Promise.all([
    queryToken(api, classId, tokenId),
    queryClass(api, classId),
  ]);

  const metadata = await getMetadata<Token['metadata']>(tokenData.metadata);

  // TODO investigate, do we care about the minter here? Is the minter just the class creator?
  // If not, it must be the transaction initiator, but if that's the case why not have this on claim too?
  const model: Token = {
    tokenId,
    classId,
    type: ClassType.Simple,
    owner: tokenData.owner,
    properties: classData.data.properties,
    used: tokenData.data.used,
    rarity: tokenData.data.rarity,
    metadata,
    metadataCID: tokenData.metadata,
  };

  const doc = new TokenModel(model);

  await doc.save();
  console.log('\nTokenModel:', doc);
}

/*
SIMPLE 29
QUANTITY 100
OWNER 4AwUTvxKFzWRxqH2eK5wjt6USqtZD5cFnFeYdLK4M98CrnfP
  */
