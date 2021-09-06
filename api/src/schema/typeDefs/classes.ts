import { gql } from 'apollo-server-core';

export default gql`
  type Metadata {
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
    metadata: Metadata # claim & merge
  }

  type NewClass {
    _id: String!
    type: String!
    owner: String!
  }

  extend type Query {
    classes: [Class]
  }

  extend type Mutation {
    classCreated(_id: String!, type: String!, owner: String!): Class
  }

  extend type Subscription {
    classCreated: NewClass
  }
`;
