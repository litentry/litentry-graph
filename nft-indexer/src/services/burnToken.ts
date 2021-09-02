import { TokenModel } from 'nft-models';

export async function burnToken(
  classId: number,
  tokenId: number
): Promise<void> {
  await TokenModel.updateOne({ classId, tokenId }, { burned: true });
  console.log('\nburnToken:', classId, tokenId);
}
