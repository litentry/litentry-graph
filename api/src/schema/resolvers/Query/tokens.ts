import { TokenModel, Token, ClassProperties, ClassType } from 'nft-models';

export default async function tokens(
  parent: undefined,
  filter: {
    _id: string;
    tokenId: number;
    classId: number;
    owner: string;
    type: ClassType;
    properties: ClassProperties;
  }
): Promise<Token[]> {
  const tokens = await TokenModel.find(filter);
  return tokens;
}
