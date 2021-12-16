export default /* GraphQL */ `
  type Tip {
    "id: Tip Hash"
    id: String!
    who: String
    finder: String
    reason: String!
    deposit: String
    closes: String
    median: String
  }
  type Query {
    tips: [Tip!]
    tip(id: String!): Tip
  }
`;
