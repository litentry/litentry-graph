import scalars from './scalars';
import Query from './Query';
import Subscription from './Subscription';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export default {
  ...scalars,
  Query,
  Subscription,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};
