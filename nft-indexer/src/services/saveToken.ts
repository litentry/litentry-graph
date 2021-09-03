import { ApiPromise } from '@polkadot/api';
import type { Token } from 'nft-models';
import { ClassType, TokenModel } from 'nft-models';
import { getMetadata } from './getMetadata';
import { queryClass } from './queryClass';
import { queryToken } from './queryToken';

export async function saveToken(
  api: ApiPromise,
  classId: number,
  tokenId: number
): Promise<void> {
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
