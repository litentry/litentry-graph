import { TokenModel, Token, ClassProperties } from 'nft-models';

export default async function transferableTokens(
  parent: undefined,
  { owner }: { owner: string }
): Promise<Token[]> {
  const tokens = await TokenModel.find({
    owner,
    burned: false,
    used: false,
  })
    .where('properties')
    .in([ClassProperties.Both, ClassProperties.Transferable]);

  return tokens;
}
