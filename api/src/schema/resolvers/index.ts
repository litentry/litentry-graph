import scalars from './scalars';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  ...scalars,
  Query: {},
  Subscription: {},
};
