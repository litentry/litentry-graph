import express from 'express';
import { AddressInfo } from 'net'
import { graphqlHTTP } from 'express-graphql';
import { stitchSchemas } from '@graphql-tools/stitch';
import { RenameRootFields, RenameTypes, wrapSchema } from '@graphql-tools/wrap';
import { introspectSchema } from '@graphql-tools/wrap';
import { schema as proxySchema } from 'substrate-api-proxy';
import makeRemoteExecutor from './makeRemoteExecutor';
import config from './config';
import { capitalize } from './utils';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';

async function makeGatewaySchema() {
  const remoteSchemas = [];

  for (let i = 0; i < config.remoteSchemaConfig.length; i++) {
    const executor = makeRemoteExecutor(config.remoteSchemaConfig[i].url);
    const schema = await introspectSchema(executor);
    remoteSchemas.push(
      // without wrapSchema the schemas from The Graph's hosted service fail on null __typename
      wrapSchema({
        schema,
        executor,
      })
    );
  }

  const wrappedProxySchema = wrapSchema({
    schema: proxySchema,
    transforms: [
      new RenameTypes((name) => `Proxy${capitalize(name)}`),
      new RenameRootFields((_, name) => `proxy${capitalize(name)}`),
    ],
  });

  return stitchSchemas({
    subschemas: [
      wrappedProxySchema,
      ...remoteSchemas,
    ],
  });
}

async function run() {
  const app = express();
  const schema = await makeGatewaySchema();
  const getSubstrateApi = await initSubstrateApi();

  app.use(
    '/graphql',
    graphqlHTTP((request) => {
      const substrateNetwork = request.headers[
        'substrate-network'
      ] as SubstrateNetwork;
      const api = getSubstrateApi(substrateNetwork);

      return {
        schema,
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
