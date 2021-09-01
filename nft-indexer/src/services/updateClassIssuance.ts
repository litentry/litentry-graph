import { ApiPromise } from '@polkadot/api';
import { ClassModel } from 'nft-models';
import { queryClass } from './queryClass';

export async function updateClassIssuance(
  api: ApiPromise,
  classId: number
): Promise<void> {
  const { totalIssuance } = await queryClass(api, classId);

  await ClassModel.updateOne({ _id: classId }, { totalIssuance });
  console.log('\ntotalIssuance:', totalIssuance);
}
