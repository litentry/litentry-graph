import { Schema, model } from 'mongoose';
import type { BlockEvent } from '../types';

const blockEventSchema = new Schema<BlockEvent>({
  _id: String,

  // index allows us to get by block
  blockNumber: { type: Number, required: true, index: true },

  // indexes allow us to get by extrinsic
  phase: { type: String, required: true, index: true },
  phaseIndex: { type: Number, required: true, index: true },

  // indexes allow us to get by pallet event
  section: { type: String, required: true, index: true },
  method: { type: String, required: true, index: true },

  data: [],
  topics: [],
});

const BlockEventModel = model<BlockEvent>('BlockEvent', blockEventSchema);

export default BlockEventModel;
