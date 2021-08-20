import type { ApiPromise } from '@polkadot/api';
import axios from 'axios';
import { SimpleClass, ClassType } from 'nft-models';
import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.CreatedClass
  [address, class_id]: [string, number],
  api: ApiPromise
): Promise<void> {
  await saveEvent({ name: 'CreatedClass', data: [address, class_id] });

  const result = await api.query.ormlNft.classes(class_id);
  const classData = result.toHuman() as {
    metadata: string;
    totalIssuance: number;
    owner: string;
    data: {
      properties: string;
      start_block: null | number;
      end_block: null | number;
      class_type: {
        Claim?: string;
        Simple?: number;
        Merge?: string; // todo
      };
    };
  };

  const shared = {
    _id: class_id,
    owner: address,
    totalIssuance: classData.totalIssuance,
    startBlock: classData.data.start_block || undefined,
    endBlock: classData.data.end_block || undefined,
    properties: classData.data.properties,
  };

  if (classData.data.class_type.Simple) {
    const doc = new SimpleClass({
      ...shared,
      type: ClassType.Simple,
      quantity: classData.data.class_type.Simple,
    });

    await doc.save();

    console.log(doc);
    return;
  }

  // the below is for reference only when I finish this
  let metadataHydrated;
  try {
    const { data } = await axios.get(
      `https://ipfs.fleek.co/ipfs/${classData.metadata
        .toString()
        .replace('ipfs://', '')}`
    );
    metadataHydrated = data;
  } catch (e) {
    console.log(e);
  }

  const userClassesRecord = {
    address, // index on this
    class_ids: [class_id], // if existing record append to array
  };

  const classDataRecord = {
    id: class_id,
    ...classData,
    metadataHydrated,
  };

  console.log('userClassesRecord', userClassesRecord);
  console.log('classDataRecord', classDataRecord);
}
