export default /* GraphQL */ `
  type Registry {
    decimals: Int!
    token: String!
  }

  type ChainInfo {
    chain: String!
    nodeName: String!
    nodeVersion: String!
    democracyEnactmentPeriod: String
    crowdloanMinContribution: String
    auctionsLeasePeriodSlot: String
    democracyMinimumDeposit: String
    slotsLeasePeriod: String
    registry: Registry!
    formattedExistentialDeposit: String!
  }
  type Query {
    chainInfo: ChainInfo!
  }
`;
