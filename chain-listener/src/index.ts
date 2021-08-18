import dotenv from 'dotenv';
import createApi from './create-api';
import types from './api-types';
import blockListener from './block-listener';
import parseEvents from './parse-events';
import resolvers from './resolvers';

dotenv.config({ debug: true });

(async () => {
  const provider = process.env.WS_PROVIDER;

  if (!provider) {
    console.error(provider, 'process.env.WS_PROVIDER not set');
    process.exit(1);
  }

  const api = await createApi(provider, types);

  await blockListener(api, parseEvents(resolvers));
})();
