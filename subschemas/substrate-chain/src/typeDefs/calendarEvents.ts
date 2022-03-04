export default /* GraphQL */ `
  type CalendarEvent {
    id: ID!
    date: String!
    title: String!
    blockNumber: String!
    via: String!
  }

  extend type Query {
    calendarEvents: [CalendarEvent!]!
  }
`;
