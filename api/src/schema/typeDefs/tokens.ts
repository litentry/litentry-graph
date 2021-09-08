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
    type: ClassType!
    owner: String!
    properties: ClassProperties!
    metadata: TokenMetadata!
    metadataCID: String!
    burned: Boolean
    used: Boolean
    rarity: Int
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    tokens(
      _id: String
      tokenId: Int
      classId: Int
      owner: String
      type: ClassType
      properties: ClassProperties
    ): [Token]
  }

  extend type Subscription {
    token: Token
  }
`;
