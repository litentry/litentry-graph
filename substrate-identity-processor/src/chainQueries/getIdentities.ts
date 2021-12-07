import { ApiPromise } from '@polkadot/api';
import mapAccountIdentity from '../mapAccountIdentity';
import { AccountIdentity } from '../types';

export default async function getIdentities(
  api: ApiPromise,
  accounts: string[],
  removeNulls = false
): Promise<(AccountIdentity | null)[]> {
  const identities: (AccountIdentity | null)[] = [];

  const chainData = await api.query.identity.identityOf.multi(accounts);

  chainData.forEach((item, index) => {
    const identity = mapAccountIdentity(accounts[index], item);

    if (removeNulls) {
      if (identity) {
        identities.push(identity);
      }
    } else {
      identities.push(identity);
    }
  });

  return identities;
}
