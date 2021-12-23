export default /* GraphQL */ `
  type DemocracySummary {
    activeProposalsCount: Int!
    publicPropCount: Int!
    referendumTotal: Int!
    referenda: Int!
    launchPeriod: String!
  }

  type Query {
    democracySummary: DemocracySummary
  }
`;
