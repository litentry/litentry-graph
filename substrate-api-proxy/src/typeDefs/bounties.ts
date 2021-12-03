export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: Int!
    bountyIndex: String!
    pastBounties: String!
    totalValue: String!
    treasurySpendPeriod: String!
  }
  type BountyStatus {
    beneficiary: String
    status: String!
    curator: String
    unlockAt: String
    updateDue: String
  }
  type Bounty {
    index: String!
    description: String!
    proposer: String!
    value: String!
    fee: String!
    curatorDeposit: String!
    bond: String!
    bountyStatus: BountyStatus
  }
  type Query {
    bountiesSummary: BountiesSummary!
    bounties: [Bounty!]!
    bounty(index: String!): Bounty
  }
`;
