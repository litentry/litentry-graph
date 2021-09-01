import type { ApiPromise } from '@polkadot/api';
import type { SimpleClass, ClaimClass } from 'nft-models';
import { SimpleClassModel, ClassType, ClaimClassModel } from 'nft-models';
import { saveEvent } from '../../services';
import { getMetadata, queryClass } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.CreatedClass
  [address, classId]: [string, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({ name: 'CreatedClass', data: [address, classId] });

  const classData = await queryClass(api, classId);

  const shared = {
    _id: classId,
    owner: address,
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

    console.log('SimpleClassModel', doc);
  } else if (classData.data.class_type.Claim) {
    const metadata = (await getMetadata(
      classData.metadata
    )) as ClaimClass['metadata'];

    const model: ClaimClass = {
      ...shared,
      type: ClassType.Claim,
      metadataCID: classData.metadata,
      metadata: metadata,
      merkleRoot: classData.data.class_type.Claim,
    };

    const doc = new ClaimClassModel(model);

    await doc.save();

    console.log('ClaimClassModel', doc);
  } else if (classData.data.class_type.Merge) {
    // todo
  }
}
