import scalars from './scalars';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
// import { resolvers as nftResolvers } from 'nft-schema';
import { resolvers as demoResolvers } from 'demo-schema';
// import pubsub from '../../pubsub';

const { Query: demoQuery, ...demoRest } = demoResolvers;

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  ...scalars,
  Query: {
    // ...nftResolvers.Query,
    ...demoQuery,
  },
  ...demoRest,
  Subscription: {
    // ...nftResolvers.Subscription(pubsub),
  },
  // ...nftResolvers.other,
};
