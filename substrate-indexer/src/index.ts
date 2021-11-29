import { connect } from 'mongoose';
import { ApiPromise, WsProvider } from '@polkadot/api';
import config from './config';
import indexBlockRange from './indexBlockRange';

async function run() {
  try {
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;

    await connect(uri);

    const api = await ApiPromise.create({
      provider: new WsProvider(config.provider),
    });

    if (typeof config.endBlock === 'number') {
      await indexBlockRange(config.startBlock, config.endBlock, api);
    } else {
      // TODO index from block and continue indefinitely
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

run();
