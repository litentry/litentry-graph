import express from 'express';
import { AddressInfo } from 'net';
import { graphqlHTTP } from 'express-graphql';
import { stitchSchemas } from '@graphql-tools/stitch';
import { RenameRootFields, RenameTypes, wrapSchema } from '@graphql-tools/wrap';
import { introspectSchema } from '@graphql-tools/wrap';
import { schema as proxySchema } from 'substrate-api-proxy';
import { schema as web2Schema } from '@litentry/web2-subschema';
import { schema as ipfsSchema } from '@litentry/ipfs-subschema';
import makeRemoteExecutor from './makeRemoteExecutor';
import config from './config';
import { capitalize } from './utils';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';

async function makeAggregatedSchema() {
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
  const wrappedIpfsSchema = wrapSchema({
    schema: ipfsSchema,
    transforms: [
      new RenameTypes((name) => `Ipfs${name}`),
      new RenameRootFields((_, name) => `ipfs${name}`),
    ],
  });
  const wrappedWeb2Schema = wrapSchema({
    schema: web2Schema,
    transforms: [
      new RenameTypes((name) => `Web2${name}`),
      new RenameRootFields((_, name) => `web2${name}`),
    ],
  });

  return stitchSchemas({
    subschemas: [
      wrappedProxySchema,
      wrappedIpfsSchema,
      wrappedWeb2Schema,
      ...remoteSchemas,
    ],
  });
}

async function run() {
  const app = express();
  const schema = await makeAggregatedSchema();
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
    const { port } = listener.address() as AddressInfo;
    console.log(`listening on port: ${port}`);
  });
}

run().catch(console.dir);
