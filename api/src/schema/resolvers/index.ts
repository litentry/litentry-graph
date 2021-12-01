import scalars from './scalars';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
// import { resolvers as nftResolvers } from 'nft-schema';
// import pubsub from '../../pubsub';

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  ...scalars,
  Query: {
    // ...nftResolvers.Query,
  },
  Subscription: {
    // ...nftResolvers.Subscription(pubsub),
  },
  // ...nftResolvers.other,
};
