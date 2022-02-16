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

  type Contribution {
    paraId: String!
    contribution: CrowdloanContribution!
  }

  type Crowdloan {
    paraId: String!
    depositor: Depositor!
    ending: [String!]!
    status: String!
    firstPeriod: String!
    lastPeriod: String!
    raised: String!
    formattedRaised: String!
    cap: String!
    formattedCap: String!
    contribution: Contribution!
  }

  type Query {
    crowdloanSummary: CrowdloanSummary!
    activeCrowdloans: [Crowdloan!]!
    endedCrowdloans: [Crowdloan!]!
    crowdloan(paraId: String!): Crowdloan
  }
`;
