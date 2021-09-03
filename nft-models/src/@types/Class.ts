export enum ClassType {
  Claim = 'Claim',
  Simple = 'Simple',
  Merge = 'Merge',
}

export enum ClassProperties {
  None = 'None',
  Transferable = 'Transferable',
  Burnable = 'Burnable',
  Both = 'Both',
}

export interface Class {
  _id: number;
  type: ClassType;
  owner: string;
  totalIssuance: number;
  startBlock?: number;
  endBlock?: number;
  properties: ClassProperties;
}

export interface SimpleClass extends Class {
  quantity: number;
}

export interface ClaimClass extends Class {
  metadata: {
    name: string;
    description: string;
    image: string;
    merkleTree: string;
  };
  metadataCID: string;
  merkleRoot: string;
}

export interface MergeClass extends Class {
  metadata: {
    name: string;
    description: string;
    image: string;
    merkleTree: string;
  };
  burnOnMerge: boolean;
  mergableClassIds: [number, number];
}
