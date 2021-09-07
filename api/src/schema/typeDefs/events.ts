import { gql } from 'apollo-server-core';

export default gql`
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

  extend type Query {
    events: [Event]
  }

  extend type Mutation {
    addEvent(doc: EventInput!): Event
  }

  extend type Subscription {
    eventCreated: Event
  }
`;
