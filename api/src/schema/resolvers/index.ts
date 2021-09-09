import scalars from './scalars';
import Class from './Class';
import Query from './Query';
import Subscription from './Subscription';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export default {
  ...scalars,
  Query,
  Class,
  Subscription,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};
