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
    beneficiary: AccountInfo
    status: String
    curator: AccountInfo
    unlockAt: String
    unlockAtTime: [String!]
    updateDue: String
    updateDueTime: [String!]
  }

  type Bounty {
    index: String!
    description: String!
    proposer: AccountInfo!
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
