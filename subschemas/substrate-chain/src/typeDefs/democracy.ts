export default /* GraphQL */ `
  type DemocracySummary {
    activeProposals: Int!
    proposals: String!
    referendums: String!
    activeReferendums: Int!
    launchPeriodInfo: LaunchPeriodInfo
  }

  type LaunchPeriodInfo {
    progressPercent: Int!
    timeLeft: String!
    timeLeftParts: [String!]!
  }

  type ProposalSubCall {
    meta: String
    method: String
    section: String
    args: [ProposalArg]
  }

  type ProposalArg {
    name: String
    type: String
    value: String
    subCalls: [ProposalSubCall]
  }

  type Proposal {
    index: String
    meta: String
    method: String
    section: String
    args: [ProposalArg!]
    hash: String
    endPeriod: [String!]
    activatePeriod: [String!]
    votedAye: String
    votedNay: String
    voteCountAye: String
    voteCountNay: String
    ayePercent: Float
    balance: String
    payout: String
    value: String
    bond: String
    seconds: [AccountInfo!]
    proposer: AccountInfo
    beneficiary: AccountInfo
  }

  type Query {
    democracySummary: DemocracySummary!
    democracyProposals: [Proposal!]!
    democracyReferendums: [Proposal!]!
    democracyProposal(index: String!): Proposal
    democracyReferendum(index: String!): Proposal
  }
`;
