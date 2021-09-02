import { startApolloServer } from './graphql/server';
import config from './config';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

startApolloServer(
  typeDefs,
  resolvers,
  parseInt(config.apiPort),
  config.password,
  config.username,
  config.clusterUrl,
  config.databaseName
);
