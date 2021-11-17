import { connect } from 'mongoose';
import { polkadotChainListener } from 'polkadot-chain-listener';
import { eventHandlers } from 'identity-pallet';
import BlockModel from './BlockModel';
import config from './config';
import createApi from './createApi';

const saveBlock = async (_id: number) => {
  const doc = new BlockModel({
    _id,
  });
  await doc.save();
};

const getLatestIndexedBlock = async (): Promise<number> => {
  const block = await BlockModel.findOne({}, {}, { sort: { _id: -1 } });
  return block ? block._id : -1;
};

async function run() {
  try {
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;

    await connect(uri);

    const api = await createApi(config.provider);

    await polkadotChainListener(
      api,
      eventHandlers,
      getLatestIndexedBlock,
      saveBlock
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

run();
