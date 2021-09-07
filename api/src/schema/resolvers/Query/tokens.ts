import { TokenModel, Token } from 'nft-models';

export default async function tokens(
  parent: undefined,
  filter: Partial<Token>
): Promise<Token[]> {
  const tokens = await TokenModel.find(filter);
  return tokens;
}
