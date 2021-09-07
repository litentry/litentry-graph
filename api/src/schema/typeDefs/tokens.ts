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

  input TokenMetadataInput {
    name: String
    description: String
    image: String
  }

  input TokenInput {
    _id: String!
    tokenId: Int!
    classId: Int!
    type: String!
    owner: String!
    properties: String!
    metadata: TokenMetadataInput!
    metadataCID: String!
    burned: Boolean
    used: Boolean
    rarity: Int
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    tokens(tokenId: Int, classId: Int, type: String, owner: String): [Token]
  }

  extend type Mutation {
    tokenUpdated(token: TokenInput!): Token
  }

  extend type Subscription {
    token: Token
  }
`;
