import { TokenModel } from 'nft-models';

export async function updateTokenOwnership(
  classId: number,
  tokenId: number,
  owner: string
): Promise<void> {
  await TokenModel.updateOne({ classId, tokenId }, { owner });
  console.log('\nupdateTokenOwnership:', classId, tokenId, owner);
}
