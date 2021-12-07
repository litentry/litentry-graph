import { connect } from 'mongoose';
import cliProgress from 'cli-progress';
import { ApiPromise, WsProvider } from '@polkadot/api';
import config from './config';
import { IdentityEvent } from './types';
import getEvents from './getEvents';
import eventHandlers from './eventHandlers';
import processNewEvents from './processNewEvents';

async function run() {
  try {
    console.time('Initialized mongo and Polkadot API');

    await connect(config.mongoUri);

    const api = await ApiPromise.create({
      provider: new WsProvider(config.provider),
    });

    console.timeEnd('Initialized mongo and Polkadot API');

    console.time('Fetched events from substrate-indexer');

    const events = await getEvents<IdentityEvent>([IdentityEvent.IdentitySet]);

    console.timeEnd('Fetched events from substrate-indexer');

    const bar = new cliProgress.SingleBar(
      {},
      cliProgress.Presets.shades_classic
    );
    bar.start(events.length, 0);

    for (let i = 0; i < events.length; i++) {
      await eventHandlers[events[i].method](api, events[i].data);
      bar.update(i);
    }
    bar.stop();

    console.log('Watching for new events');
    processNewEvents(api);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
