import express from 'express';
import { AddressInfo } from 'net'
import { graphqlHTTP } from 'express-graphql';
import { RenameRootFields, RenameTypes, wrapSchema } from '@graphql-tools/wrap';
import { schema as proxySchema } from 'substrate-api-proxy';
import config from './config';
import { capitalize } from './utils';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';

async function run() {
  const app = express();
  const wrappedProxySchema = wrapSchema({
    schema: proxySchema,
    transforms: [
      new RenameTypes((name) => `Proxy${capitalize(name)}`),
      new RenameRootFields((_, name) => `proxy${capitalize(name)}`),
    ],
  });
  const getSubstrateApi = await initSubstrateApi();

  app.use(
    '/graphql',
    graphqlHTTP((request) => {
      const substrateNetwork = request.headers[
        'substrate-network'
      ] as SubstrateNetwork;
      const api = getSubstrateApi(substrateNetwork);

      return {
        schema: wrappedProxySchema,
        graphiql: { headerEditorEnabled: true },
        context: { api },
      };
    })
  );
  const listener = app.listen(config.apiPort, () => {
    const {port} = listener.address() as AddressInfo;
    console.log(`listening on port: ${port}`);
  });
}

run().catch(console.dir);
