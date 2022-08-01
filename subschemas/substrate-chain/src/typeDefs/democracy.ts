export default /* GraphQL */ `
  type LaunchPeriod {
    progressPercent: Int!
    timeLeft: String!
    timeLeftParts: [String!]!
  }

  type DemocracySummary {
    activeProposals: Int!
    proposals: String!
    referendums: String!
    activeReferendums: Int!
    launchPeriod: LaunchPeriod
  }

  enum DemocracyProposalOrderByInput {
    blockNumber_ASC
    blockNumber_DESC
    date_ASC
    date_DESC
    depositAmount_ASC
    depositAmount_DESC
    id_ASC
    id_DESC
    proposalIndex_ASC
    proposalIndex_DESC
    tabledAtBlock_ASC
    tabledAtBlock_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  enum DemocracyProposalStatus {
    Cancelled
    Proposed
    Tabled
  }

  enum DemocracyReferendumOrderByInput {
    aye_ASC
    aye_DESC
    blockNumber_ASC
    blockNumber_DESC
    date_ASC
    date_DESC
    id_ASC
    id_DESC
    nay_ASC
    nay_DESC
    updatedAt_ASC
    updatedAt_DESC
    voteThreshold_ASC
    voteThreshold_DESC
  }

  enum DemocracyReferendumStatus {
    Cancelled
    Executed
    NotPassed
    Passed
    Started
  }

  type DemocracyProposal {
    id: String!
    proposer: Account!
    blockNumber: String!
    depositAmount: String!
    formattedDepositAmount: String!
    title: String!
    description: String!
    proposalHash: String!
    proposalIndex: Int!
    status: DemocracyProposalStatus!
    tabledAtBlock: String
    date: String!
    updatedAt: String!
    seconds: [AccountInfo!]!
  }

  type DemocracyReferendumVote {
    id: String!
    aye: String!
    formattedAye: String!
    nay: String!
    formattedNay: String!
    voter: String!
    blockNumber: String!
    date: String!
  }

  type DemocracyReferendum {
    id: String!
    title: String!
    description: String!
    date: String!
    aye: String!
    formattedAye: String!
    nay: String!
    formattedNay: String!
    status: DemocracyReferendumStatus!
    blockNumber: String!
    updatedAt: String!
    voteThreshold: String!
    votes: [DemocracyReferendumVote!]!
    ayePercent: Float!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracyReferendums(
      status: [DemocracyReferendumStatus!]
      limit: Int
      offset: Int
      orderBy: DemocracyReferendumOrderByInput
    ): [DemocracyReferendum!]
    democracyReferendum(id: String!): DemocracyReferendum
    democracyProposals(
      status: [DemocracyProposalStatus!]
      limit: Int
      offset: Int
      orderBy: DemocracyProposalOrderByInput
    ): [DemocracyProposal!]
    democracyProposal(id: String!): DemocracyProposal
  }
`;
