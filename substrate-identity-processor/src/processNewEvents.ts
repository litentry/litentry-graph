import { ApiPromise } from '@polkadot/api';
import BlockEventModel from './models/BlockEventModel';
import AccountIdentityModel from './models/AccountIdentityModel';
import { BlockEvent } from './types';
import chainQueries from './chainQueries';

export default function processNewEvents(api: ApiPromise): void {
  BlockEventModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', async (data) => {
    if (data.operationType === 'insert') {
      const event = data.fullDocument as BlockEvent;

      if (event?.section === 'identity' && event.method === 'IdentitySet') {
        const account = event.data[0] as string;

        const [identity] = await chainQueries.getIdentities(api, [account]);

        if (identity === null) {
          await AccountIdentityModel.findByIdAndDelete(account);
        } else {
          await AccountIdentityModel.findByIdAndUpdate(account, identity, {
            upsert: true,
          });
        }
      }
    }
  });
}
