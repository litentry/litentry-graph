import express from 'express';
import { AddressInfo } from 'net';
import { graphqlHTTP } from 'express-graphql';
import { stitchSchemas } from '@graphql-tools/stitch';
import { RenameRootFields, RenameTypes, wrapSchema } from '@graphql-tools/wrap';
import { introspectSchema } from '@graphql-tools/wrap';
import { schema as substrateChainSchema } from 'substrate-chain';
import { schema as poapSchema } from 'poap-credential';
import { schema as evmChain } from '../../subschemas/evm-chain';
import { schema as galaxySchema } from 'galaxy-credential';
import makeRemoteExecutor from './makeRemoteExecutor';
import config from './config';
import { capitalize } from './utils';
import { initSubstrateApi, SubstrateNetwork } from './substrateApi';
import Web3 from 'web3';
import remoteSchemaRepository from './repository/remoteSchemaRepository';

async function makeAggregatedSchema() {
  const remoteSchemas = await Promise.all(remoteSchemaRepository.getAll().map(async remoteSchema => {
    const executor = makeRemoteExecutor(remoteSchema.url);
    const schema = await introspectSchema(executor);
    return wrapSchema({
      schema,
      executor,
    });
  }));

  const wrappedSubstrateChainSchema = wrapSchema({
    schema: substrateChainSchema,
    transforms: [
      new RenameTypes((name) => `SubstrateChain${capitalize(name)}`),
      new RenameRootFields((_, name) => `substrateChain${capitalize(name)}`),
    ],
  });

  const wrappedPoapSchema = wrapSchema({
    schema: poapSchema,
    transforms: [
      new RenameTypes((name) => `PoapCredential${capitalize(name)}`),
      new RenameRootFields((_, name) => `PoapCredential${capitalize(name)}`),
    ],
  });

  const wrappedGalaxySchema = wrapSchema({
    schema: galaxySchema,
    transforms: [
      new RenameTypes((name) => `GalaxyCredential${capitalize(name)}`),
      new RenameRootFields((_, name) => `GalaxyCredential${capitalize(name)}`),
    ],
  });

  const wrappedEvmChainSchemaSchema = wrapSchema({
    schema: evmChain,
    transforms: [
      new RenameTypes((name) => `EVMChain${capitalize(name)}`),
      new RenameRootFields((_, name) => `EVMChain${capitalize(name)}`),
    ],
  });

  return stitchSchemas({
    subschemas: [
      wrappedSubstrateChainSchema,
      wrappedPoapSchema,
      wrappedGalaxySchema,
      wrappedEvmChainSchemaSchema,
      ...remoteSchemas,
    ],
  });
}

async function run() {
  const app = express();
  let schema = await makeAggregatedSchema();
  const getSubstrateApi = await initSubstrateApi();
  const web3 = new Web3(config.ethMainnetProvider);
  const web3BSC = new Web3(config.bscProvider);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(
    '/graphql',
    graphqlHTTP((request) => {
      const substrateNetwork = request.headers['substrate-network'] as SubstrateNetwork;
      const api = getSubstrateApi(substrateNetwork);

      return {
        schema,
        graphiql: { headerEditorEnabled: true },
        context: { api, web3, web3BSC },
      };
    }),
  );

  app.post(
    '/remote-schema',
    (req, res) => {
      const { key } = req.query;
      if (!key || key !== process.env.API_KEY) {
        return res.status(403).send('Access denied');
      }

      try {
        const { name, url } = req.body;

        if (!name.match(/^[a-z-]{1,50}$/)) {
          return res.status(400).send('Invalid name');
        }

        try {
          if ((new URL(url)).host !== 'squid.subsquid.io') {
            throw new Error('Invalid host');
          }
        } catch (e) {
          return res.status(400).send('Invalid url');
        }

        remoteSchemaRepository.setSchema({name, url});
        return res.status(201).send('Success');
      } catch (e) {
        return res.status(400).send('Bad request');
      }
    }
  )

  const listener = app.listen(config.apiPort, () => {
    const { port } = listener.address() as AddressInfo;
    console.log(`listening on port: ${port}`);
  });

  setInterval(async () => {
    try {
      schema = await makeAggregatedSchema();
    } catch (e: any) {
      console.warn(`Failed to update schema - ${e?.message}`);
    }
  }, 1000 * 60);
}

run().catch(console.dir);
