import { TokenModel } from 'nft-models';
import { triggerMutation } from '../utils/triggerMutation';

export async function burnToken(
  classId: number,
  tokenId: number
): Promise<void> {
  const token = await TokenModel.findOneAndUpdate(
    { classId, tokenId },
    { burned: true },
    { lean: true, new: true }
  );

  triggerMutation('TOKEN_UPDATED', token);

  console.log('\nburnToken:', classId, tokenId);
}
