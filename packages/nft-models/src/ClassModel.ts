import { Schema, model } from 'mongoose';
import { ClassType, ClassProperties } from './@types';
import type { Class, ClaimClass, SimpleClass, MergeClass } from './@types';

const classSchema = new Schema<Class>(
  {
    _id: Number,
    type: {
      type: String,
      required: true,
      enum: [ClassType.Claim, ClassType.Simple, ClassType.Merge],
    },
    owner: { type: String, required: true },
    totalIssuance: { type: Number, required: true },
    startBlock: Number,
    endBlock: Number,
    properties: {
      type: String,
      required: true,
      enum: [
        ClassProperties.None,
        ClassProperties.Transferable,
        ClassProperties.Burnable,
        ClassProperties.Both,
      ],
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
    metadata: {
      type: {
        name: String,
        description: String,
        image: String,
      },
      required: true,
    },
    burnOnMerge: { type: Boolean, required: true },
    mergableClassIds: {
      type: [Number], // todo make ObjectId?
      required: true,
      validate: (v: number[]) => v.length === 2,
    },
  },
  options
);

export const ClassModel = model<Class>('Class', classSchema);
export const SimpleClassModel = ClassModel.discriminator(
  ClassType.Simple,
  simpleClassSchema
);
export const ClaimClassModel = ClassModel.discriminator(
  ClassType.Claim,
  claimClassSchema
);
export const MergeClassModel = ClassModel.discriminator(
  ClassType.Merge,
  mergeClassSchema
);
