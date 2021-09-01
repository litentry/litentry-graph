import type { ApiPromise } from '@polkadot/api';
import type { Token } from 'nft-models';
import { ClassType, TokenModel } from 'nft-models';
import { saveEvent } from '../../repositories/events';
import { getMetadata, queryClass, queryToken } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.ClaimedToken
  [claimer, classId, tokenId]: [string, number, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({
    name: 'ClaimedToken',
    data: [claimer, classId, tokenId],
  });

  const [tokenData, classData] = await Promise.all([
    queryToken(api, classId, tokenId),
    queryClass(api, classId),
  ]);

  const metadata = (await getMetadata(tokenData.metadata)) as Token['metadata'];

  const model: Token = {
    tokenId,
    classId,
    type: ClassType.Claim,
    owner: tokenData.owner,
    properties: classData.data.properties,
    used: tokenData.data.used,
    rarity: tokenData.data.rarity,
    metadata,
    metadataCID: tokenData.metadata,
  };

  const doc = new TokenModel(model);

  await doc.save();

  console.log('TokenModel', doc);
}
