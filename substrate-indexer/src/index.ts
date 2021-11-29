import { connect } from 'mongoose';
import { ApiPromise, WsProvider } from '@polkadot/api';
import config from './config';
import indexBlockRange from './indexBlockRange';
import mongoUri from './mongoUri';
import parseBlock from './parseBlock';
import BlockEventModel from './models/BlockEvent';
import BlockExtrinsicModel from './models/BlockExtrinsic';

async function run() {
  try {
    await connect(mongoUri);

    const api = await ApiPromise.create({
      provider: new WsProvider(config.provider),
    });

    if (typeof config.endBlock === 'number') {
      indexBlockRange(config.startBlock, config.endBlock, api, true);
    } else {
      let endBlock: number;
      let latestBlockNumber: number;

      api.derive.chain.subscribeNewHeads((header) => {
        const blockNumber = header.number.toNumber();
        console.info(`New header: ${blockNumber}`);

        if (!endBlock) {
          endBlock = blockNumber - 1;
          indexBlockRange(config.startBlock, endBlock, api, false);
        }

        // sometimes the API pushes the new block to us twice causing a duplicate key error in mongo
        if (latestBlockNumber === blockNumber) {
          return;
        }
        latestBlockNumber = blockNumber;

        parseBlock(blockNumber, api, async (extrinsics, events) => {
          try {
            await BlockExtrinsicModel.insertMany(extrinsics);
            await BlockEventModel.insertMany(events);

            console.info(`Indexed latest block ${blockNumber}`);
          } catch (e) {
            console.error(e);
            process.exit(1);
          }
        });
      });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
