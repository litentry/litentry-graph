export default /* GraphQL */ `
  type BountiesSummary {
    activeBounties: String!
    bountyCount: String!
    pastBounties: String!
    totalValue: String!
    formattedTotalValue: String!
    timeLeft: [String!]!
    progressPercent: Int!
    bountyDepositBase: String!
    bountyValueMinimum: String!
    dataDepositPerByte: String!
    maximumReasonLength: String!
  }

  type BountyStatus {
    beneficiary: NestedAccount
    status: String
    curator: NestedAccount
    unlockAt: String
    unlockAtTime: [String!]
    updateDue: String
    updateDueTime: [String!]
  }

  type Bounty {
    index: String!
    description: String!
    proposer: NestedAccount!
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
