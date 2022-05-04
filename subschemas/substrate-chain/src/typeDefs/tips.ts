export default /* GraphQL */ `
  type Tipper {
    account: Account!
    balance: String!
    formattedBalance: String!
  }

  type Tip {
    "id: Tip Hash"
    id: String!
    who: Account!
    finder: Account
    reason: String!
    deposit: String
    formattedDeposit: String
    closes: String
    createdAt: String!
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
