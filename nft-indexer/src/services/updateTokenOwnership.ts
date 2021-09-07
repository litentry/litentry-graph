import { TokenModel } from 'nft-models';
import { triggerMutation } from '../utils/triggerMutation';

export async function updateTokenOwnership(
  classId: number,
  tokenId: number,
  owner: string
): Promise<void> {
  const token = await TokenModel.findOneAndUpdate(
    { classId, tokenId },
    { owner },
    { lean: true, new: true }
  );

  triggerMutation('TOKEN_UPDATED', token);

  console.log('\nupdateTokenOwnership:', classId, tokenId, owner);
}
