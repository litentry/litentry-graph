export default /* GraphQL */ `
  enum SwapPlatform {
    pancakeswap
    uniswap
  }

  type Query {
    liquidityProvidedByAccount(platform: SwapPlatform!, contract: String!, address: String!): LPData!
  }

  type LPData {
    contract: String!
    address: String!
    totalSupply: Float!
    liquidityProvided: Float!
    percentageOfPool: Float!
  }
`;
