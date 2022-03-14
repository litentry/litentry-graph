export default /* GraphQL */ `
  type Query {
    liquidityProvidedByAccount(contract: String!, address: String!): LPData!
  }

  type LPData {
    contract: String!
    address: String!
    totalSupply: Float!
    liquidityProvided: Float!
    percentageOfPool: Float!
  }
`;
