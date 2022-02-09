export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: String!
    bountyCount: String!
    pastBounties: String!
    totalValue: String!
    formattedTotalValue: String!
    timeLeft: [String!]!
    progressPercent: Int!
  }

  type Curator {
    address: String!
    account: Account!
  }

  type Beneficiary {
    address: String!
    account: Account!
  }

  type BountyStatus {
    beneficiary: Beneficiary
    status: String
    curator: Curator
    unlockAt: String
    updateDue: String
  }

  type Bounty {
    index: String!
    description: String!
    proposer: Proposer!
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
