import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { connect } from 'mongoose';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { ApiPromise, WsProvider } from '@polkadot/api';
import config from './config';
import schema from './schema';

async function run() {
  const app = express();
  const httpServer = createServer(app);

  // we need to do this outside of context else it connects on every request
  const wsProvider = new WsProvider(config.provider);
  const api = await ApiPromise.create({ provider: wsProvider });
  await api.isReady;

  const server = new ApolloServer({
    introspection: true,
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context: async () => {
      try {
        return { api };
      } catch (e) {
        console.log(e);
        process.exit(1);
      }
    },
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  await connect(config.mongoUri);
  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(config.apiPort, () => {
    console.log(`Server is now running on ${config.graphqlUri}`);
  });
}

run().catch(console.dir);
