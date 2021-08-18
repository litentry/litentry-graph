import { ApiPromise } from '@polkadot/api';
import { VoidFn } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';
import { EventRecord, SignedBlock } from '@polkadot/types/interfaces';

/**
 * Listens for new heads on the chain,
 * gets the block and all events from the block,
 * passes them to the callback
 */
export default async function blockListener(
  api: ApiPromise,
  callback: (
    api: ApiPromise,
    signedBlock: SignedBlock,
    allRecords: Vec<EventRecord>
  ) => void
): Promise<VoidFn> {
  const unsubscribe = await api.rpc.chain.subscribeNewHeads(async (header) => {
    console.log(`\nChain is at block: #${header.number}`);

    const signedBlock = await api.rpc.chain.getBlock(header.hash);
    const allRecords = await api.query.system.events.at(
      signedBlock.block.header.hash
    );

    callback(api, signedBlock, allRecords);
  });

  return unsubscribe;
}
