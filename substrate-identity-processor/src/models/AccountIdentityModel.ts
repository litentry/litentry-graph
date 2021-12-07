import { Schema, model } from 'mongoose';
import type { AccountIdentity } from '../types';

const accountIdentitySchema = new Schema<AccountIdentity>({
  _id: String,
  judgements: [
    {
      registrar: { type: Number, required: true },
      judgement: { type: String, required: true },
      _id: false,
    },
  ],
  deposit: { type: Number, required: true },
  display: { type: String, required: true },
  legal: String,
  web: String,
  riot: String,
  email: String,
  image: String,
  twitter: String,
  pgpFingerprint: String,
  additional: [String],
});

const AccountIdentityModel = model<AccountIdentity>(
  'AccountIdentity',
  accountIdentitySchema
);

export default AccountIdentityModel;
