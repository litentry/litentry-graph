import { gql } from 'apollo-server-core';

export default gql`

  type CouncilMember {
    address: String!
    account: Account!
    backing: String 
  }

  type Council {
    members: [CouncilMember!]!
    runnersUp: [CouncilMember!]!
  }

  extend type Query {
    council: Council!
  }

`;
