import { gql } from 'apollo-server-core';

const typeDefs = gql`
  scalar EventData
  scalar Date

  type Event {
    _id: String!
    name: String!
    data: EventData
    createdAt: Date!
    updatedAt: Date!
  }

  input EventInput {
    _id: String!
    name: String!
    data: EventData
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    events: [Event]
  }

  type Mutation {
    addEvent(event: EventInput!): Event
  }

  type Subscription {
    eventCreated: Event
  }
`;

export default typeDefs;
