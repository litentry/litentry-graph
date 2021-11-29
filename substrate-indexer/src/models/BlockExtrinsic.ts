import { Schema, model } from 'mongoose';
import type { BlockExtrinsic } from '../types';

const blockExtrinsicSchema = new Schema<BlockExtrinsic>({
  _id: String,

  // index allows us to get by block
  blockNumber: { type: Number, required: true, index: true },

  // indexes allow us to get by pallet method
  section: { type: String, required: true, index: true },
  method: { type: String, required: true, index: true },

  // index allows us to get by account
  signer: { type: String, required: false, index: true },

  index: { type: Number, required: true },
  args: { type: [String], required: true },
  tip: { type: Number, required: true },
  isSigned: { type: Boolean, required: true },
  signature: String,
  nonce: Number,
  immortalEra: String,
  mortalEra: {
    period: Number,
    phase: Number,
  },
});

const BlockExtrinsicModel = model<BlockExtrinsic>(
  'BlockExtrinsic',
  blockExtrinsicSchema
);

export default BlockExtrinsicModel;
