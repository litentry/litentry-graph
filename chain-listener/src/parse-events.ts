import type { ApiPromise } from '@polkadot/api';
import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { Resolvers } from './types';

const parseEvents =
  (resolvers: Resolvers) =>
  async (api: ApiPromise, allRecords: Vec<EventRecord>): Promise<void> => {
    allRecords.forEach(({ event }) => {
      const resolver = resolvers[event.section]?.[event.method];

      if (resolver) {
        resolver(event.data.toJSON(), api);
      }
    });
  };

export default parseEvents;
