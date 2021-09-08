import { TokenModel, Token, ClassProperties } from 'nft-models';

export default async function burnableTokens(
  parent: undefined,
  { owner }: { owner: string }
): Promise<Token[]> {
  const tokens = await TokenModel.find({
    owner,
    burned: null,
    used: false,
  })
    .where('properties')
    .in([ClassProperties.Both, ClassProperties.Burnable]);

  return tokens;
}
