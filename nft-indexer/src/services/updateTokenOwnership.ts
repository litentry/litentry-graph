import { TokenModel } from 'nft-models';

export async function updateTokenOwnership(
  tokenId: number,
  owner: string
): Promise<void> {
  await TokenModel.updateOne({ tokenId }, { owner });
  console.log('\nupdateTokenOwnership:', tokenId, owner);
}
