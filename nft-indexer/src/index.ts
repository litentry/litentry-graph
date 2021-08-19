import { chainListener } from 'chain-listener';
import types from './api-types';
import resolvers from './resolvers';
import config from './config';

async function run() {
  try {
    await chainListener(config.provider, types, resolvers);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

run();
