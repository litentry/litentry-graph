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
    subCalls: [Proposal]
  }

  type Proposer {
    address: String!
    account: Account!
  }

  type ProposalSecond {
    address: String!
    account: Account!
  }

  type Proposal {
    index: String!
    balance: String
    seconds: [ProposalSecond!]!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    proposer: Proposer!
  }

  type Referendum {
    index: String!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    endPeriod: [String!]!
    activatePeriod: [String!]!
    votedAye: String!
    votedNay: String!
    voteCountAye: String!
    voteCountNay: String!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracyProposals: [Proposal!]!
    democracyReferendums: [Referendum!]!
    democracyProposal(index: String!): Proposal
    democracyReferendum(index: String!): Referendum
  }
`;
