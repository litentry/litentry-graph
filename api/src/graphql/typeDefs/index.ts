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

  type Query {
    events: [Event]
  }

  type Mutation {
    addEvent(name: String!): Event
  }

  type Subscription {
    eventCreated: Event
  }
`;

export default typeDefs;
