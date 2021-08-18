import type { ApiPromise } from '@polkadot/api';
import type { Vec } from '@polkadot/types';
import type { EventRecord, SignedBlock } from '@polkadot/types/interfaces';
import type { Resolvers } from './types';

const parseEvents =
  (resolvers: Resolvers) =>
  async (
    api: ApiPromise,
    signedBlock: SignedBlock,
    allRecords: Vec<EventRecord>
  ): Promise<void> => {
    signedBlock.block.extrinsics.forEach(
      ({ method: { method, section } }, index) => {
        const resolver = resolvers[section]?.[method];

        if (!resolver) return;

        allRecords
          // filter the specific events based on the phase and then the
          // index of our extrinsic in the block
          .filter(
            ({ phase }) =>
              phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index)
          )
          // test the events against the specific types we are looking for
          .forEach(({ event }) => {
            if (api.events.nft[resolver.eventName]?.is(event)) {
              resolver.handler(api, event.data.toJSON());
            }
          });
      }
    );
  };

export default parseEvents;
