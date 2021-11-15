import { gql } from 'apollo-server-core';

export default gql`
  type Event {
    _id: String!
    name: String!
    data: JSON!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    events: [Event]
  }

  extend type Subscription {
    eventCreated: Event
  }
`;
