export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: Int!
    bountyIndex: Int!
    pastBounties: Int!
    totalValue: Int!
    treasurySpendPeriod: Int!
  }
  type BountyStatus {
    beneficiary: String
    status: String!
    curator: String!
    unlockAt: Int
    updateDue: Int!
  }
  type Bounty {
    index: Int!
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
  }
`;
