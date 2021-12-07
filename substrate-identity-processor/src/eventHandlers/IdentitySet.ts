import { ApiPromise } from '@polkadot/api';
import chainQueries from '../chainQueries';
import AccountIdentityModel from '../models/AccountIdentityModel';
import { EventHandler } from '../types';

const handler: EventHandler = async (
  api: ApiPromise,
  [account]: string[]
): Promise<void> => {
  const identity = await chainQueries.getIdentity(api, account);

  if (identity === null) {
    await AccountIdentityModel.findByIdAndDelete(account);
  } else {
    await AccountIdentityModel.findByIdAndUpdate(account, identity, {
      upsert: true,
    });
  }
};

export default handler;
