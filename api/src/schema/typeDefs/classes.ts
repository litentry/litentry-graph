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
    type: ClassType!
    owner: String!
    totalIssuance: Int!
    startBlock: Int
    endBlock: Int
    properties: ClassProperties!
    createdAt: Date!
    updatedAt: Date!
    quantity: Int # simple
    merkleRoot: String # claim
    burnOnMerge: Boolean # merge
    mergableClassIds: [Int] # merge
    metadataCID: String # claim & merge
    metadata: ClassMetadata # claim & merge
  }

  extend type Query {
    classes(
      _id: String
      owner: String
      type: ClassType
      properties: ClassProperties
    ): [Class]
    mintableClasses: [Class]
  }

  extend type Subscription {
    class: Class
  }
`;
