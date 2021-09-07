import { ApiPromise } from '@polkadot/api';
import type { Token } from 'nft-models';
import { ClassType, TokenModel } from 'nft-models';
import { triggerMutation } from '../utils/triggerMutation';
import { getMetadata } from './getMetadata';
import { queryClass } from './queryClass';
import { queryToken } from './queryToken';

export async function saveToken(
  api: ApiPromise,
  classId: number,
  tokenId: number,
  type: ClassType
): Promise<void> {
  const [tokenData, classData] = await Promise.all([
    queryToken(api, classId, tokenId),
    queryClass(api, classId),
  ]);

  const metadata = await getMetadata<Token['metadata']>(tokenData.metadata);

  const model: Token = {
    tokenId,
    classId,
    type,
    owner: tokenData.owner,
    properties: classData.data.properties,
    used: tokenData.data.used,
    rarity: tokenData.data.rarity,
    metadata,
    metadataCID: tokenData.metadata,
  };

  const doc = new TokenModel(model);

  await doc.save();

  triggerMutation('TOKEN_UPDATED', doc.toObject());

  console.log('\nTokenModel:', doc);
}
