import { Option } from '@polkadot/types';
import { PalletIdentityRegistration } from '@polkadot/types/lookup';
import { u8aToString } from '@polkadot/util';
import { AccountIdentity } from '../../types';

export default function mapAccountIdentity(
  account: string,
  chainData: Option<PalletIdentityRegistration>
): AccountIdentity | null {
  const identity = chainData.unwrapOr(null);

  if (identity === null) {
    return null;
  }

  return {
    _id: account,
    deposit: identity.deposit.toNumber(),

    judgements: identity.judgements.map((judgement) => ({
      registrar: judgement[0].toNumber(),
      judgement: judgement[1].toString(),
    })),

    display: u8aToString(identity.info.display.asRaw),
    email: u8aToString(identity.info.email.asRaw),
    image: u8aToString(identity.info.image.asRaw),
    legal: u8aToString(identity.info.legal.asRaw),
    pgpFingerprint: identity.info.pgpFingerprint.toString(), // not sure what this is
    riot: u8aToString(identity.info.riot.asRaw),
    twitter: u8aToString(identity.info.twitter.asRaw),
    web: u8aToString(identity.info.web.asRaw),

    additional: identity.info.additional.map((item) => item.toString()),
  };
}
