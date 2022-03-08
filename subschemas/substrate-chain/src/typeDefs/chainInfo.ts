export default /* GraphQL */ `
  type Registry {
    decimals: Int!
    token: String!
  }

  type ChainInfo {
    chain: String!
    nodeName: String!
    nodeVersion: String!
    registry: Registry!
  }
  type Query {
    chainInfo: ChainInfo!
  }
`;
