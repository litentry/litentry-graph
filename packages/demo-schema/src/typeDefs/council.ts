import { gql } from 'apollo-server-core';

export default gql`

  type CouncilMember {
    address: String!
    account: Account!
    baking: Int!
  }

  type Council {
    members: [CouncilMember]
  }

  extend type Query {
    council: Council
  }

`;
