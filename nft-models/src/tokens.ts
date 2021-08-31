import { Schema, model } from 'mongoose';
import { ClassType, ClassProperties } from './classes';

export interface IToken {
  tokenId: number; // index
  classId: number; // index - should be ObjectId
  type: ClassType; // index
  owner: string; // index
  properties: ClassProperties;
  used?: boolean;
  rarity?: number;
  metadata: {
    name: string;
    description: string;
    image: string;
  };
  metadataCID: string;
}

const tokenSchema = new Schema<IToken>(
  {
    tokenId: { type: Number, required: true },
    classId: { type: Number, required: true },
    type: { type: String, required: true, enum: ['Claim', 'Simple', 'Merge'] },
    owner: { type: String, required: true },
    properties: {
      type: String,
      required: true,
      enum: ['None', 'Transferable', 'Burnable', 'Both'],
    },
    metadata: {
      type: {
        name: String,
        description: String,
        image: String,
      },
      required: true,
    },
    metadataCID: { type: String, required: true },
    used: Boolean,
    rarity: Number,
  },
  {
    timestamps: true,
  }
);

// all the things we MIGHT want to index on
tokenSchema.index({ classId: 1 });
tokenSchema.index({ owner: 1 });
tokenSchema.index({ properties: 1 });
tokenSchema.index({ tokenId: 1 });
tokenSchema.index({ type: 1 });

export const TokenModel = model<IToken>('Token', tokenSchema);
