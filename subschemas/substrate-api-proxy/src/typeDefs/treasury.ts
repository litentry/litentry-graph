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
  type ProposalVotes {
    index: String
    threshold: String
    ayes: [String!]
    nays: [String!]
    end: String
  }
  type CollectiveProposal {
    hash: String!
    votes: ProposalVotes!
    callIndex: String!
  }
  type PalletProposal {
    proposer: String!
    value: String!
    beneficiary: String!
    bond: String!
  }
  type TreasuryProposal {
    council: [CollectiveProposal!]!
    id: String!
    proposal: PalletProposal!
  }
  type TreasurySummary {
    activeProposals: Int!
    proposalCount: String!
    approvedProposals: Int!
    spendPeriod: String!
    treasuryBalance: TreasuryBalance!
    burn: String
  }
  type TreasuryInfo {
    approvals: [TreasuryProposal!]!
    proposals: [TreasuryProposal!]!
  }
  type Query {
    treasurySummary: TreasurySummary!
    treasuryInfo: TreasuryInfo!
  }
`;
