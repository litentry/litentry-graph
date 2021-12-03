export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: Int!
    bountyIndex: Float!
    pastBounties: Float!
    totalValue: Float!
    treasurySpendPeriod: Float!
  }
  type BountyStatus {
    beneficiary: String
    status: String!
    curator: String
    unlockAt: Float
    updateDue: Float
  }
  type Bounty {
    index: Float!
    description: String!
    proposer: String!
    value: Float!
    fee: Float!
    curatorDeposit: Float!
    bond: Float!
    bountyStatus: BountyStatus
  }
  type Query {
    bountiesSummary: BountiesSummary!
    bounties: [Bounty!]!
    bounty(index: Float!): Bounty
  }
`;
