import { Schema, model } from 'mongoose';

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

export interface IClass {
  _id: number;
  type: ClassType;
  owner: string;
  totalIssuance: number;
  startBlock?: number;
  endBlock?: number;
  properties: ClassProperties;
}

export interface ISimpleClass extends IClass {
  quantity: number;
}

export interface IClaimClass extends IClass {
  metadata: {
    name: string;
    description: string;
    image: string;
    merkleTree: string;
  };
  metadataCID: string;
  merkleRoot: string;
}

export interface IMergeClass extends IClass {
  todo: string;
}

const classSchema = new Schema<IClass>(
  {
    _id: Number,
    type: { type: String, required: true, enum: ['Claim', 'Simple', 'Merge'] },
    owner: { type: String, required: true },
    totalIssuance: { type: Number, required: true },
    startBlock: Number,
    endBlock: Number,
    properties: {
      type: String,
      required: true,
      enum: ['None', 'Transferable', 'Burnable', 'Both'],
    },
  },
  {
    timestamps: true,
  }
);

const options = {
  discriminatorKey: 'type',
};

const simpleClassSchema = new Schema<ISimpleClass>(
  {
    quantity: { type: Number, required: true },
  },
  options
);

const claimClassSchema = new Schema<IClaimClass>(
  {
    metadata: {
      type: {
        name: String,
        description: String,
        image: String,
        merkleTree: { type: String, required: true },
      },
      required: true,
    },
    metadataCID: { type: String, required: true },
    merkleRoot: { type: String, required: true },
  },
  options
);

const mergeClassSchema = new Schema<IMergeClass>(
  {
    todo: String,
  },
  options
);

export const ClassModel = model<IClass>('Class', classSchema);
export const SimpleClassModel = ClassModel.discriminator(
  'Simple',
  simpleClassSchema
);
export const ClaimClassModel = ClassModel.discriminator(
  'Claim',
  claimClassSchema
);
export const MergeClassModel = ClassModel.discriminator(
  'Merge',
  mergeClassSchema
);
