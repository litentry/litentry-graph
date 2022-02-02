export default /* GraphQL */ `
  type CrowdloanSummary {
    activeRaised: String!
    activeCap: String!
    totalRaised: String!
    totalCap: String!
    activeProgress: Float!
    totalProgress: Float!
    totalFunds: Int!
  }

  type Query {
    crowdloanSummary: CrowdloanSummary!
  }
`;
