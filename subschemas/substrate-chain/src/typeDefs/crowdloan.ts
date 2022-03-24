export default /* GraphQL */ `
  enum CrowdloanStatus {
    Active
    Ended
  }

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

  type Crowdloan {
    paraId: String!
    name: String
    depositor: AccountInfo!
    ending: [String!]!
    status: String!
    firstPeriod: String!
    lastPeriod: String!
    raised: String!
    formattedRaised: String!
    cap: String!
    formattedCap: String!
    raisedPercentage: String!
    contribution: CrowdloanContribution!
    homepage: String
  }

  type Query {
    crowdloanSummary: CrowdloanSummary!
    activeCrowdloans: [Crowdloan!]!
    endedCrowdloans: [Crowdloan!]!
    crowdloan(paraId: String!): Crowdloan
    crowdloans(status: CrowdloanStatus): [Crowdloan!]!
  }
`;
