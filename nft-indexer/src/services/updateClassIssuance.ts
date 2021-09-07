import { ApiPromise } from '@polkadot/api';
import { ClassModel } from 'nft-models';
import { triggerMutation } from '../utils/triggerMutation';
import { queryClass } from './queryClass';

export async function updateClassIssuance(
  api: ApiPromise,
  classId: number
): Promise<void> {
  const { totalIssuance } = await queryClass(api, classId);

  const doc = await ClassModel.findOneAndUpdate(
    { _id: classId },
    { totalIssuance },
    { lean: true, new: true }
  );

  console.log('\ntotalIssuance:', totalIssuance);

  triggerMutation('CLASS_UPDATED', doc);
}
