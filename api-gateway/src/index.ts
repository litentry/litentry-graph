import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { stitchSchemas } from '@graphql-tools/stitch';
// import { introspectSchema } from '@graphql-tools/wrap';
import { schema } from 'substrate-api-proxy';
// import makeRemoteExecutor from './makeRemoteExecutor';
import config from './config';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';

async function makeGatewaySchema() {
  // const subsquidExec = makeRemoteExecutor(
  //   'https://app.gc.subsquid.io/beta/litentry/test/graphql'
  // );

  return stitchSchemas({
    subschemas: [
      schema,
      // {
      //   schema: await introspectSchema(subsquidExec),
      //   executor: subsquidExec,
      // },
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
  app.listen(config.apiPort);
}

run().catch(console.dir);
