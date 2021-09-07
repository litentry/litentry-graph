import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { connect } from 'mongoose';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import config from './config';
import schema from './schema';

const app = express();
const httpServer = createServer(app);

const server = new ApolloServer({
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
  ],
  context: async () => {
    try {
      // Try to connect to MongoDB
      await connect(config.mongoUri);
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

async function run() {
  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(config.apiPort, () =>
    console.log(`Server is now running on ${config.graphqlUri}`)
  );
}

run();
