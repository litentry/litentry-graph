export default /* GraphQL */ `
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
