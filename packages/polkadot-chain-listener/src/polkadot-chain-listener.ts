import type { ApiPromise } from '@polkadot/api';
import type { Handlers } from './types';
import blockListener from './block-listener';
import parseEvents from './parse-events';

async function hasLatestBlock(
  api: ApiPromise,
  getLatestIndexedBlock: () => Promise<number>
): Promise<boolean> {
  const latestBlockOnChain = await (
    await api.derive.chain.bestNumber()
  ).toNumber();
  const latestIndexedBlock = await getLatestIndexedBlock();

  return latestBlockOnChain === latestIndexedBlock;
}

export async function polkadotChainListener(
  api: ApiPromise,
  handlers: Handlers,
  getLatestIndexedBlock: () => Promise<number>,
  saveBlock: (_id: number) => Promise<void>
): Promise<void> {
  let upToDate = await hasLatestBlock(api, getLatestIndexedBlock);

  while (!upToDate) {
    const latestIndexedBlock = await getLatestIndexedBlock();
    const blockNumber = latestIndexedBlock + 1;
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    const allRecords = await (await api.at(blockHash)).query.system.events();

    await parseEvents(handlers)(api, allRecords);
    await saveBlock(blockNumber);
    console.log('\nIndexed block number:', latestIndexedBlock);
    upToDate = await hasLatestBlock(api, getLatestIndexedBlock);
  }

  await blockListener(api, parseEvents(handlers));
}
