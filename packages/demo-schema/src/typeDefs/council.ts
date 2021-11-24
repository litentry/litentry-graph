import { gql } from 'apollo-server-core';

export default gql`

  type CouncilMember {
    accountId: String!
    baking: Int!
  }

  type Council {
    members: [CouncilMember]
  }

  extend type Query {
    council: Council
  }

`;
