import { Schema, model } from 'mongoose';

type Block = {
  _id: number;
};

const blockSchema = new Schema<Block>({
  _id: Number,
});

const BlockModel = model<Block>('Block', blockSchema);

export default BlockModel;
