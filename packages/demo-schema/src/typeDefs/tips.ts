import { gql } from 'apollo-server-core';

export default gql`
  type Tip {
    "id: Tip Hash"
    id: String!
    who: String!
    finder: String!
    reason: String!
    deposit: String!
    closes: String
  }
  extend type Query {
    tips: [Tip!]
  }
`;
