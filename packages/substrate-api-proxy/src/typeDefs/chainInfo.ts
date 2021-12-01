export default /* GraphQL */ `
  type ChainInfo {
    chain: String!
    nodeName: String!
    nodeVersion: String!
  }
  extend type Query {
    chainInfo: ChainInfo!
  }
`;
