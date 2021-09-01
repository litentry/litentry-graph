import { Schema, model } from 'mongoose';
import type { Class, ClaimClass, SimpleClass, MergeClass } from './@types';

const classSchema = new Schema<Class>(
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

// all the things we MIGHT want to index on
classSchema.index({ owner: 1 });
classSchema.index({ properties: 1 });
classSchema.index({ type: 1 });

const options = {
  discriminatorKey: 'type',
};

const simpleClassSchema = new Schema<SimpleClass>(
  {
    quantity: { type: Number, required: true },
  },
  options
);

const claimClassSchema = new Schema<ClaimClass>(
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

const mergeClassSchema = new Schema<MergeClass>(
  {
    todo: String,
  },
  options
);

export const ClassModel = model<Class>('Class', classSchema);
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
