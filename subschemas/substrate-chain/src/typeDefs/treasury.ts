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

  type Proposal {
    index: String!
    proposer: AccountInfo!
    value: String!
    beneficiary: AccountInfo!
    bond: String!
  }

  type TreasuryProposal {
    proposal: Proposal!
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

  type Treasury {
    approvals: [TreasuryProposal!]!
    proposals: [TreasuryProposal!]!
  }

  type Query {
    treasurySummary: TreasurySummary!
    treasury: Treasury!
  }
`;
