import { connect } from 'mongoose';
import config from '../config';
import BlockEventModel from '../models/BlockEvent';
import BlockExtrinsicModel from '../models/BlockExtrinsic';

async function run() {
  if (!config.endBlock) {
    console.error('process.env.END_BLOCK must be set');
    process.exit(1);
  }

  try {
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;

    await connect(uri);

    for (
      let blockNumber = config.startBlock;
      blockNumber < config.endBlock;
      blockNumber++
    ) {
      const extrinsicResult = await BlockExtrinsicModel.deleteMany({
        blockNumber,
      });
      const eventResult = await BlockEventModel.deleteMany({ blockNumber });
      console.log(
        `\nBlock ${blockNumber}\nExtrinsics deleted:${extrinsicResult.deletedCount}\nEvents deleted:${eventResult.deletedCount}`
      );
    }
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

run();
