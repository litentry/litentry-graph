export default /* GraphQL */ `
  type Tipper {
    address: String!
    account: Account!
    balance: String!
    formattedBalance: String!
  }

  type Tip {
    "id: Tip Hash"
    id: String!
    who: AccountInfo!
    finder: AccountInfo
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
