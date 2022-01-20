import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { stitchSchemas } from '@graphql-tools/stitch';
import { RenameTypes, wrapSchema } from '@graphql-tools/wrap';
import { introspectSchema } from '@graphql-tools/wrap';
import { schema as proxySchema } from 'substrate-api-proxy';
import makeRemoteExecutor from './makeRemoteExecutor';
import config from './config';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';

async function makeGatewaySchema() {
  const remoteSchemas = [];

  for (let i = 0; i < config.remoteSchemaConfig.length; i++) {
    const executor = makeRemoteExecutor(config.remoteSchemaConfig[i].url);
    const schema = await introspectSchema(executor);
    remoteSchemas.push({
      schema,
      executor,
    });
  }

  const wrappedProxySchema = wrapSchema({
    schema: proxySchema,
    transforms: [new RenameTypes((name) => `proxy_${name}`)],
  });

  return stitchSchemas({
    subschemas: [wrappedProxySchema, remoteSchemas],
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
  app.listen(config.apiPort);
}

run().catch(console.dir);
