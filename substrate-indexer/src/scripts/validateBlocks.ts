import fs from 'fs';
import { connect } from 'mongoose';
import { ApiPromise, WsProvider } from '@polkadot/api';
import _ from 'lodash';
import config from '../config';
import BlockEventModel from '../models/BlockEvent';
import BlockExtrinsicModel from '../models/BlockExtrinsic';
import parseBlock from '../parseBlock';
import mongoUri from '../mongoUri';

const logFile = fs.createWriteStream('./log/validationErrors.log', {
  flags: 'w',
});
const logStdout = process.stdout;

function logError(blockNumber: number, message: string): void {
  logFile.write(
    `Block: ${blockNumber.toString()}\n${message}\n------------------------------\n`
  );
  logStdout.write(`Block: ${blockNumber.toString()}\n${message}\n`);
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isMatch(a: Record<string, unknown>, b: Record<string, unknown>) {
  const withoutUndefinedPropertiesA = _.omitBy(a, _.isUndefined);
  const withoutUndefinedPropertiesB = _.omitBy(b, _.isUndefined);

  return _.isEqual(withoutUndefinedPropertiesB, {
    ...withoutUndefinedPropertiesA,
    __v: withoutUndefinedPropertiesB.__v,
  });
}

async function run() {
  if (!config.endBlock) {
    console.error('process.env.END_BLOCK must be set');
    process.exit(1);
  }

  try {
    await connect(mongoUri);

    const api = await ApiPromise.create({
      provider: new WsProvider(config.provider),
    });

    let checked = 0;
    for (let i = 1; i <= config.totalToValidate; i++) {
      const blockNumber = randomInt(config.startBlock, config.endBlock);

      await parseBlock(blockNumber, api, async (extrinsics, events) => {
        const indexedExtrinsics = (
          await BlockExtrinsicModel.find({
            blockNumber,
          })
        ).map((model) => model.toObject());

        const indexedEvents = (
          await BlockEventModel.find({
            blockNumber,
          })
        ).map((model) => model.toObject());

        extrinsics.forEach((extrinsic) => {
          const indexed = indexedExtrinsics.find(
            (indexed) => indexed._id === extrinsic._id
          );

          if (!indexed) {
            logError(blockNumber, `Extrinsic ${extrinsic._id} not found`);
          } else if (!isMatch(extrinsic, indexed)) {
            logError(
              blockNumber,
              `Extrinsic ${
                extrinsic._id
              } not equal\nOn chain data:\n${JSON.stringify(
                { ...extrinsic, __v: indexed.__v },
                null,
                2
              )}\nIndexed data:\n${JSON.stringify(indexed, null, 2)}`
            );
          }
        });

        events.forEach((event) => {
          const indexed = indexedEvents.find(
            (indexed) => indexed._id === event._id
          );

          if (!indexed) {
            logError(blockNumber, `Event ${event._id} not found`);
          } else if (!isMatch(event, indexed)) {
            logError(
              blockNumber,
              `Event ${event._id} not equal\nOn chain data:\n${JSON.stringify(
                event,
                null,
                2
              )}\nIndexed data:\n${JSON.stringify(indexed, null, 2)}`
            );
          }
        });

        console.info(`Checked: ${blockNumber}`);
        checked++;

        if (checked === config.totalToValidate) {
          console.info('Done');
          process.exit(0);
        }
      });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
