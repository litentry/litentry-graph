import { connect } from 'mongoose';
import { ApiPromise, WsProvider } from '@polkadot/api';
import config from './config';
import mongoUri from './mongoUri';
import getUniqueAccounts from './getUniqueAccounts';
import chainQueries from './chainQueries';
import AccountIdentityModel from './models/AccountIdentityModel';
import processNewEvents from './processNewEvents';

async function run() {
  console.time('Historical events processed');

  try {
    await connect(mongoUri);

    const api = await ApiPromise.create({
      provider: new WsProvider(config.provider),
    });

    // query events
    const accounts = await getUniqueAccounts();

    // query polkadot api
    const identities = await chainQueries.getIdentities(api, accounts, true);

    // delete then insert the data, this is much easier and less error prone than upserting
    await AccountIdentityModel.deleteMany();
    await AccountIdentityModel.insertMany(identities);

    console.timeEnd('Historical events processed');

    processNewEvents(api);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
