export default /* GraphQL */ `
  type ChainInfo {
    chain: String!
    nodeName: String!
    nodeVersion: String!
  }
  type Query {
    chainInfo: ChainInfo!
  }
`;
