import { gql } from 'apollo-server-core';

export default gql`
  type ClassMetadata {
    name: String
    description: String
    image: String
    merkleTree: String # claim only
  }

  type Class {
    _id: String!
    type: String!
    owner: String!
    totalIssuance: Int!
    startBlock: Int
    endBlock: Int
    properties: String!
    createdAt: Date!
    updatedAt: Date!
    quantity: Int # simple
    merkleRoot: String # claim
    burnOnMerge: Boolean # merge
    mergableClassIds: [Int] # merge
    metadataCID: String # claim & merge
    metadata: ClassMetadata # claim & merge
  }

  input ClassMetadataInput {
    name: String
    description: String
    image: String
    merkleTree: String # claim only
  }

  input ClassInput {
    _id: String!
    type: String!
    owner: String!
    totalIssuance: Int!
    startBlock: Int
    endBlock: Int
    properties: String!
    quantity: Int # simple
    merkleRoot: String # claim
    burnOnMerge: Boolean # merge
    mergableClassIds: [Int] # merge
    metadataCID: String # claim & merge
    metadata: ClassMetadataInput # claim & merge
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    classes(type: String): [Class]
  }

  extend type Mutation {
    classUpdated(class: ClassInput): Class
  }

  extend type Subscription {
    class: Class
  }
`;
