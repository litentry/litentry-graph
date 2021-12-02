import type { ApiPromise } from '@polkadot/api';
import parseBlock from './parseBlock';
import BlockEventModel from './models/BlockEvent';
import BlockExtrinsicModel from './models/BlockExtrinsic';

export default async function indexBlockRange(
  start: number,
  end: number,
  api: ApiPromise,
  exitWhenComplete: boolean
): Promise<void> {
  let indexed = 0;
  const totalToIndex = end - start + 1;

  /*
  This check needs to be executable within the callback else we'll have
  to await the callback inside parseBlock() which would slow it down. 
  */
  const checkIfComplete = () => {
    indexed++;
    if (indexed === totalToIndex) {
      console.info('Indexed all blocks in range');

      if (exitWhenComplete) {
        process.exit(0);
      }
    }
  };

  for (let blockNumber = start; blockNumber <= end; blockNumber++) {
    const blockExtrinsicsIndexed = !!(await BlockExtrinsicModel.findOne({
      blockNumber,
    }));
    const blockEventsIndexed = !!(await BlockEventModel.findOne({
      blockNumber,
    }));

    if (blockExtrinsicsIndexed && blockEventsIndexed) {
      console.info(`Skipped block ${blockNumber}`);
      checkIfComplete();
      continue;
    }

    await parseBlock(blockNumber, api, async (extrinsics, events) => {
      try {
        if (!blockExtrinsicsIndexed) {
          await BlockExtrinsicModel.insertMany(extrinsics);
        } else {
          console.info(`Skipped extrinsics for block ${blockNumber}`);
        }
        if (!blockEventsIndexed) {
          await BlockEventModel.insertMany(events);
        } else {
          console.info(`Skipped events for block ${blockNumber}`);
        }

        console.info(`Indexed block ${blockNumber}`);
        checkIfComplete();
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
  }
}
