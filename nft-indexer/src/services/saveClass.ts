import { ApiPromise } from '@polkadot/api';
import type { SimpleClass, ClaimClass, MergeClass } from 'nft-models';
import {
  SimpleClassModel,
  ClassType,
  ClaimClassModel,
  MergeClassModel,
} from 'nft-models';
import { getMetadata } from './getMetadata';
import { queryClass } from './queryClass';

export async function saveClass(
  api: ApiPromise,
  classId: number
): Promise<void> {
  const classData = await queryClass(api, classId);

  const shared = {
    _id: classId,
    owner: classData.owner,
    totalIssuance: classData.totalIssuance,
    startBlock: classData.data.start_block || undefined,
    endBlock: classData.data.end_block || undefined,
    properties: classData.data.properties,
  };

  if (classData.data.class_type.Simple) {
    const model: SimpleClass = {
      ...shared,
      type: ClassType.Simple,
      quantity: classData.data.class_type.Simple,
    };

    const doc = new SimpleClassModel(model);

    await doc.save();

    console.log('\nSimpleClassModel:', doc);
  } else if (classData.data.class_type.Claim) {
    const metadata = await getMetadata<ClaimClass['metadata']>(
      classData.metadata
    );

    const model: ClaimClass = {
      ...shared,
      type: ClassType.Claim,
      metadataCID: classData.metadata,
      metadata: metadata,
      merkleRoot: classData.data.class_type.Claim,
    };

    const doc = new ClaimClassModel(model);

    await doc.save();

    console.log('\nClaimClassModel:', doc);
  } else if (classData.data.class_type.Merge) {
    const metadata = await getMetadata<MergeClass['metadata']>(
      classData.metadata
    );

    const model: MergeClass = {
      ...shared,
      type: ClassType.Merge,
      metadataCID: classData.metadata,
      metadata: metadata,
      burnOnMerge: classData.data.class_type.Merge[2],
      mergableClassIds: [
        classData.data.class_type.Merge[0],
        classData.data.class_type.Merge[1],
      ],
    };

    const doc = new MergeClassModel(model);

    await doc.save();

    console.log('\nMergeClassModel:', doc);
  }
}
