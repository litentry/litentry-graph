export default /* GraphQL */ `
  type CrowdloanSummary {
    activeRaised: String!
    formattedActiveRaised: String!
    activeCap: String!
    formattedActiveCap: String!
    totalRaised: String!
    formattedTotalRaised: String!
    totalCap: String!
    formattedTotalCap: String!
    activeProgress: Float!
    totalProgress: Float!
    totalFunds: Int!
  }

  type Depositor {
    address: String!
    account: Account!
  }

  type Crowdloan {
    key: String!
    depositor: Depositor!
    ending: [String!]!
    status: String!
    firstPeriod: String!
    lastPeriod: String!
    raised: String!
    cap: String!
  }

  type Query {
    crowdloanSummary: CrowdloanSummary!
    activeCrowdloans: [Crowdloan!]!
  }
`;
