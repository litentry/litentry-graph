import { connect } from 'mongoose';
import { chainListener } from 'chain-listener';
import types from './api-types';
import resolvers from './resolvers';
import config from './config';

async function run() {
  try {
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;

    await connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await chainListener(config.provider, types, resolvers);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

run();
