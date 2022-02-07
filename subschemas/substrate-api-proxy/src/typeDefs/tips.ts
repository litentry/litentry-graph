export default /* GraphQL */ `
  type Finder {
    address: String!
    account: Account!
  }

  type Who {
    address: String!
    account: Account!
  }

  type Tip {
    "id: Tip Hash"
    id: String!
    who: Who!
    finder: Finder
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
