export default /* GraphQL */ `
  type CouncilMember {
    address: String!
    account: Account!
    backing: String
    voters: [String!]!
  }

  type CouncilCandidate {
    address: String!
    account: Account!
  }

  type TermProgress {
    termDuration: String
    termLeft: String
    percentage: Int
  }

  type Council {
    members: [CouncilMember!]!
    runnersUp: [CouncilMember!]!
    candidates: [CouncilCandidate!]!
    primeMember: CouncilMember
    desiredSeats: Int
    desiredRunnersUp: Int
    termProgress: TermProgress!
  }

  extend type Query {
    council: Council!
  }
`;
