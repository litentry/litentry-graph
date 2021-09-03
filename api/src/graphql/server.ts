import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connect } from 'mongoose';

export const startApolloServer = async (
  typeDefs: any,
  resolvers: any,
  port: number,
  mongoPassword: string,
  mongoUsername: string,
  mongoClusterURL: string,
  mongoDatabaseName: string
): Promise<void> => {
  const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoClusterURL}/${mongoDatabaseName}?retryWrites=true&w=majority`;
  const app = express();
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // Apollo Server
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
        await connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      } catch (e) {
        console.log(e);
        process.exit(1);
      }
    },
  });

  // Subscription Server
  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(port, () =>
    console.log(`Server is now running on http://localhost:${port}/graphql`)
  );
};
