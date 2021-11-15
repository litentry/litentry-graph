import { gql } from 'apollo-server-core';

export default gql`
  type BalanceData {
    free: Float!
    reserved: Float!
    miscFrozen: Float!
    feeFrozen: Float!
  }
  type Balance {
    nonce: Int!
    consumers: Int!
    providers: Int!
    sufficients: Int!
    data: BalanceData!
  }
  extend type Query {
    balance(address: String!): Balance!
  }
`;
