import { Schema, model } from 'mongoose';
import type { Registrar } from '../@types';

const registrarSchema = new Schema<Registrar>({
  index: { type: Number, required: true },
  address: { type: String, required: true },
  lastBlockUpdate: { type: Number, required: true },
});

registrarSchema.index({ index: 1 });
registrarSchema.index({ address: 1 });

const RegistrarModel = model<Registrar>('Registrar', registrarSchema);

export default RegistrarModel;
