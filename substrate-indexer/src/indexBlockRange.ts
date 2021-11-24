import type { ApiPromise } from '@polkadot/api';
import parseBlock from './parseBlock';
import BlockEventModel from './models/BlockEvent';
import BlockExtrinsicModel from './models/BlockExtrinsic';

export default async function indexBlockRange(
  start: number,
  end: number,
  api: ApiPromise
): Promise<void> {
  let indexed = 0;
  const totalToIndex = end - start + 1;

  for (let blockNumber = start; blockNumber <= end; blockNumber++) {
    await parseBlock(blockNumber, api, async (extrinsics, events) => {
      try {
        await BlockExtrinsicModel.insertMany(extrinsics);
        await BlockEventModel.insertMany(events);
        console.log(`Indexed block ${blockNumber}`);

        // we keep indexed count and exit here so parseBlock doesn't have to await the callback and slow the process down
        indexed++;
        if (indexed === totalToIndex) {
          console.log(`Indexed all blocks in range`);
          process.exit(0);
        }
      } catch (e) {
        console.log(e);
        process.exit(1);
      }
    });
  }
}
