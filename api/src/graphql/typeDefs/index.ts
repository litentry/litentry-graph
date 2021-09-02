import { gql } from 'apollo-server-core';

const typeDefs = gql`
  scalar EventData
  scalar Date

  type Event {
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
    newEvent(): Event
  }
`;

export default typeDefs;
