import { ApiPromise } from '@polkadot/api';
import BlockEventModel from './models/BlockEventModel';
import { BlockEvent, IdentityEvent } from './types';
import eventHandlers from './eventHandlers';

export default function processNewEvents(api: ApiPromise): void {
  BlockEventModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', async (data) => {
    if (data.operationType === 'insert') {
      const event = data.fullDocument as BlockEvent;

      if (event?.section === 'identity') {
        eventHandlers[event.method as IdentityEvent as IdentityEvent](
          api,
          event.data
        );
      }
    }
  });
}
