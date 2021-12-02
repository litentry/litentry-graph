import { connect } from 'mongoose';
import BlockExtrinsicModel from '../models/BlockExtrinsic';
import BlockEventModel from '../models/BlockEvent';
import mongoUri from '../mongoUri';

async function run() {
  await connect(mongoUri);

  console.time();
  const a = await BlockExtrinsicModel.findOne({
    section: 'identity',
    method: 'setIdentity',
  });
  const b = await BlockEventModel.findOne({
    blockNumber: a?.blockNumber,
    phase: 'ApplyExtrinsic',
    phaseIndex: 0,
  });

  console.timeEnd();
  console.log(a, b);

  process.exit(0);
}

run();
