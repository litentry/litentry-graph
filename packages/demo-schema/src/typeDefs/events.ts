import { gql } from 'apollo-server-core';

export default gql`
  type Event {
    id: ID!
    date: String!
    title: String!
    blockNumber: String!
  }

  extend type Query {
    events: [Event!]!
  }
`;
