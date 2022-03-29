export default /* GraphQL */ `
  type CouncilMember {
    address: String!
    account: Account!
    backing: String!
    formattedBacking: String!
    voters: [String!]!
  }

  type TermProgress {
    termDuration: String!
    termDurationParts: [String!]!
    termLeft: String!
    termLeftParts: [String!]
    percentage: Int!
  }

  type Council {
    members: [CouncilMember!]!
    runnersUp: [CouncilMember!]!
    candidates: [AccountInfo!]!
    totalCandidates: Int!
    primeMember: CouncilMember
    desiredSeats: Int!
    totalMembers: Int!
    desiredRunnersUp: Int!
    totalRunnersUp: Int!
    termProgress: TermProgress!
  }

  type VotingStatus {
    hasFailed: Boolean!
    hasPassed: Boolean!
    isCloseable: Boolean!
    isVoteable: Boolean!
    remainingBlocks: String
    remainingBlocksTime: [String!]
    status: String!
  }

  type ProposalVotes {
    threshold: Int!
    ayes: [AccountInfo!]!
    nays: [AccountInfo!]!
    end: String!
    endTime: [String!]!
  }

  type CouncilMotion {
    proposal: Proposal!
    votes: ProposalVotes
    votingStatus: VotingStatus
  }

  type Query {
    council: Council!
    councilMotions: [CouncilMotion!]!
    councilMotionDetail(hash: String!): CouncilMotion
  }
`;
