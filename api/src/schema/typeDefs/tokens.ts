import { gql } from 'apollo-server-core';

export default gql`
  type TokenMetadata {
    name: String
    description: String
    image: String
  }

  type Token {
    _id: String!
    tokenId: Int!
    classId: Int!
    type: String!
    owner: String!
    properties: String!
    metadata: TokenMetadata!
    metadataCID: String!
    burned: Boolean
    used: Boolean
    rarity: Int
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    tokens(tokenId: Int, classId: Int, type: String, owner: String): [Token]
  }

  extend type Subscription {
    token: Token
  }
`;
