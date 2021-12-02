export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: Int!
    bountyIndex: Int!
    pastBounties: Int!
    totalValue: Int!
    treasurySpendPeriod: Int!
  }
  type Query {
    bountiesSummary: BountiesSummary!
  }
`;
