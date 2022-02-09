export default /* GraphQL */ `
  type Finder {
    address: String!
    account: Account!
  }

  type Who {
    address: String!
    account: Account!
  }

  type Tipper {
    address: String!
    account: Account!
    balance: String!
    formattedBalance: String!
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
    formattedMedian: String
    tippersCount: Int!
    tippers: [Tipper!]!
  }
  type Query {
    tips: [Tip!]
    tip(id: String!): Tip
  }
`;
