import { Schema, model } from 'mongoose';
import type { Token } from './@types';

const tokenSchema = new Schema<Token>(
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

export const TokenModel = model<Token>('Token', tokenSchema);
