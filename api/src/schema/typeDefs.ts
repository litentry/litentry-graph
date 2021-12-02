import { gql } from 'apollo-server-core';
import { typeDefs as demoTypeDefs } from 'demo-schema';

const base = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  type Query {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;

export default [base, ...demoTypeDefs];
