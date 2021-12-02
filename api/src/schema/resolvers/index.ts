import scalars from './scalars';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { resolvers as demoResolvers } from 'demo-schema';

const { Query: demoQuery, ...demoRest } = demoResolvers;

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  ...scalars,
  Query: {
    ...demoQuery,
  },
  ...demoRest,
  Subscription: {},
};
