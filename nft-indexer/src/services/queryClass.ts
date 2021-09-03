import { ApiPromise } from '@polkadot/api';
import { ClassProperties } from 'nft-models';

type ClassData = {
  metadata: string;
  totalIssuance: number;
  owner: string;
  data: {
    properties: ClassProperties;
    start_block: null | number;
    end_block: null | number;
    class_type: {
      Claim?: string;
      Simple?: number;
      Merge?: [number, number, boolean];
    };
  };
};

export async function queryClass(
  api: ApiPromise,
  classId: number
): Promise<ClassData> {
  const rawClassData = await api.query.ormlNft.classes(classId);

  const classData = rawClassData.toHuman() as ClassData;

  return classData;
}
