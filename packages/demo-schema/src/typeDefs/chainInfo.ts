import { gql } from 'apollo-server-core';

export default gql`
  type ChainInfo {
    chain: String!
    nodeName: String!
    nodeVersion: String!
  }
  extend type Query {
    chainInfo: ChainInfo!
  }
`;
