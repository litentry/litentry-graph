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
    unlockAtTime: [String!]
    updateDue: String
    updateDueTime: [String!]
  }

  type Bounty {
    index: String!
    description: String!
    proposer: Proposer!
    value: String!
    formattedValue: String!
    fee: String!
    formattedFee: String!
    curatorDeposit: String!
    formattedCuratorDeposit: String!
    bond: String!
    formattedBond: String!
    bountyStatus: BountyStatus!
  }
  type Query {
    bountiesSummary: BountiesSummary!
    bounties: [Bounty!]!
    bounty(index: String!): Bounty
  }
`;
