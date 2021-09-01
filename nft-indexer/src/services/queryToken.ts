import { ApiPromise } from '@polkadot/api';

type TokenData = {
  metadata: string;
  owner: string;
  data: {
    used: boolean;
    rarity: number;
  };
};

export async function queryToken(
  api: ApiPromise,
  classId: number,
  tokenId: number
): Promise<TokenData> {
  const rawTokenData = await api.query.ormlNft.tokens(classId, tokenId);

  const tokenData = rawTokenData.toHuman() as TokenData;

  return tokenData;
}
