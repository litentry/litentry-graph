import { Schema, model } from 'mongoose';

export enum ClassType {
  Claim = 'Claim',
  Simple = 'Simple',
  Merge = 'Merge',
}

export interface IClass {
  _id: number;
  type: ClassType;
  owner: string;
  totalIssuance: number;
  startBlock?: number;
  endBlock?: number;
  properties: string; // TODO once bug is fixed
}

export interface ISimpleClass extends IClass {
  quantity: number;
}

export interface IClaimClass extends IClass {
  metadata: {
    name: string;
    description: string;
    image: string;
    merkleTreeCID: string;
  };
  metadataCID: string;
  merkleProof: string;
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
    properties: String, // TODO update once bug is fixed
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
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        merkleTreeCID: { type: String, required: true },
      },
      required: true,
    },
    metadataCID: { type: String, required: true },
    merkleProof: { type: String, required: true },
  },
  options
);

const mergeClassSchema = new Schema<IMergeClass>(
  {
    todo: String,
  },
  options
);

export const Class = model<IClass>('Class', classSchema);
export const SimpleClass = Class.discriminator('Simple', simpleClassSchema);
export const ClaimClass = Class.discriminator('Claim', claimClassSchema);
export const MergeClass = Class.discriminator('Merge', mergeClassSchema);
