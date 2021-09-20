import type { ApiPromise } from '@polkadot/api';
import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { Handlers } from './types';

const parseEvents =
  (handlers: Handlers) =>
  async (api: ApiPromise, allRecords: Vec<EventRecord>): Promise<void> => {
    allRecords.forEach(({ event }) => {
      const handler = handlers[event.section]?.[event.method];

      if (handler) {
        handler(event.data.toJSON(), api);
      }
    });
  };

export default parseEvents;
