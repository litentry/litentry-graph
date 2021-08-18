import type { ApiPromise } from '@polkadot/api';
import axios from 'axios';

async function handler(
  api: ApiPromise,
  [address, classId]: [string, number]
): Promise<void> {
  const result = await api.query.ormlNft.classes(classId);
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
    // console.log(e);
  }

  const userClassesRecord = {
    address, // index on this
    classIds: [classId], // if existing record append to array
  };

  const classDataRecord = {
    id: classId,
    ...classData,
    metadataHydrated,
  };

  console.log('userClassesRecord', userClassesRecord);
  console.log('classDataRecord', classDataRecord);
}

export default {
  handler,
  eventName: 'CreatedClass',
};
