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

  type Query {
    crowdloanSummary: CrowdloanSummary!
  }
`;
