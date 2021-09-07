import { gql } from 'apollo-server-core';

export default gql`
  type Event {
    _id: String!
    name: String!
    data: EventData
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    events: [Event]
  }

  extend type Mutation {
    addEvent(name: String!): Event
  }

  extend type Subscription {
    eventCreated: Event
  }
`;
