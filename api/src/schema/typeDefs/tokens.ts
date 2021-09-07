export interface Token {
  burned?: boolean;
  used?: boolean;
  rarity?: number;
  metadata: {
    name: string;
    description: string;
    image: string;
  };
  metadataCID: string;
}

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
  }

  type UpdatedToken {
    _id: String!
    tokenId: Int!
    classId: Int!
    type: String!
    owner: String!
  }

  extend type Query {
    tokens(tokenId: Int, classId: Int, type: String, owner: String): [Token]
  }

  extend type Mutation {
    tokenUpdated(
      _id: String!
      tokenId: Int!
      classId: Int!
      type: String!
      owner: String!
    ): Token
  }

  extend type Subscription {
    tokens: UpdatedToken
  }
`;
