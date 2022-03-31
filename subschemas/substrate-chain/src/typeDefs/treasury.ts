export default /* GraphQL */ `
  type TreasuryBalance {
    accountId: String!
    accountNonce: String!
    freeBalance: String!
    frozenFee: String!
    frozenMisc: String!
    reservedBalance: String!
    votingBalance: String!
  }

  type TreasuryProposal {
    index: String!
    proposer: AccountInfo!
    value: String!
    beneficiary: AccountInfo!
    bond: String!
  }

  type Treasury {
    proposal: TreasuryProposal!
    votes: [ProposalVotes!]!
  }

  type TreasurySummary {
    activeProposals: Int!
    totalProposals: Int!
    approvedProposals: Int!
    spendPeriod: SpendPeriod!
    treasuryBalance: TreasuryBalance!
    nextBurn: String!
  }

  type SpendPeriod {
    percentage: Int!
    termLeft: String!
    termLeftParts: [String!]!
    period: String!
  }

  type TreasuryProposals {
    approvals: [Treasury!]!
    proposals: [Treasury!]!
  }

  type Query {
    treasurySummary: TreasurySummary!
    treasuryProposals: TreasuryProposals!
  }
`;
