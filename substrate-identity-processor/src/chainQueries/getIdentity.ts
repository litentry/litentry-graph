import { ApiPromise } from '@polkadot/api';
import mapAccountIdentity from './mappers/mapAccountIdentity';
import { AccountIdentity } from '../types';

export default async function getIdentity(
  api: ApiPromise,
  account: string
): Promise<AccountIdentity | null> {
  const chainData = await api.query.identity.identityOf(account);
  return mapAccountIdentity(account, chainData);
}
