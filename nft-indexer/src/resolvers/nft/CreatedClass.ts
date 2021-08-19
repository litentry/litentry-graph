import type { ApiPromise } from '@polkadot/api';
import axios from 'axios';
import { saveEvent } from '../../repositories/events';

export default async function handler(
  api: ApiPromise,
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.CreatedClass
  [address, class_id]: [string, number]
): Promise<void> {
  await saveEvent({ name: 'CreatedClass', data: [address, class_id] });

  // Below is just a bit of an example of how we'd get more data to make what we save useful.

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
        Simple?: string;
      };
    };
  };

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
