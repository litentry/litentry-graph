import { connect } from 'mongoose';
import config from '../config';
import BlockEventModel from '../models/BlockEvent';
import BlockExtrinsicModel from '../models/BlockExtrinsic';
import mongoUri from '../mongoUri';

async function run() {
  if (!config.endBlock) {
    console.error('process.env.END_BLOCK must be set');
    process.exit(1);
  }

  try {
    await connect(mongoUri);

    for (
      let blockNumber = config.startBlock;
      blockNumber < config.endBlock;
      blockNumber++
    ) {
      const extrinsicResult = await BlockExtrinsicModel.deleteMany({
        blockNumber,
      });
      const eventResult = await BlockEventModel.deleteMany({ blockNumber });
      console.info(
        `\nBlock ${blockNumber}\nExtrinsics deleted:${extrinsicResult.deletedCount}\nEvents deleted:${eventResult.deletedCount}`
      );
    }
    console.info('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
