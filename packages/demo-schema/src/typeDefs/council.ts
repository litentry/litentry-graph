import { gql } from 'apollo-server-core';

export default gql`
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


  type Council {
    members: [CouncilMember!]!
    runnersUp: [CouncilMember!]!
    candidates: [CouncilCandidate!]!
  }

  extend type Query {
    council: Council!
  }
`;
