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

  type ProposalArg {
    name: String
    type: String
    value: String
    subCalls: [DemocracyProposal]
  }

  type Proposer {
    address: String!
    account: Account!
  }

  type ProposalSecond {
    address: String!
    account: Account!
  }

  type DemocracyProposal {
    index: String!
    balance: String
    formattedBalance: String
    seconds: [ProposalSecond!]!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    proposer: Proposer!
  }

  type DemocracyReferendum {
    index: String!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    endPeriod: [String!]!
    activatePeriod: [String!]!
    votedAye: String!
    formattedVotedAye: String!
    votedNay: String!
    formattedVotedNay: String!
    voteCountAye: String!
    voteCountNay: String!
    ayePercent: Float!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracyProposals: [DemocracyProposal!]!
    democracyReferendums: [DemocracyReferendum!]!
    democracyProposal(index: String!): DemocracyProposal
    democracyReferendum(index: String!): DemocracyReferendum
  }
`;
