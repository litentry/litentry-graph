import { gql } from 'apollo-server-core';

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

export default [base];
