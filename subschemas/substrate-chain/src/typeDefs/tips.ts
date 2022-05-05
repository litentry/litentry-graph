export default /* GraphQL */ `
  enum TipStatus {
    Closed
    Opened
    Retracted
    Slashed
  }

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
    status: TipStatus!
    deposit: String
    formattedDeposit: String
    closes: String
    closesTime: [String!]
    createdAt: String!
    medianTipValue: String
    formattedMedianTipValue: String
    tippersCount: Int!
    tippers: [Tipper!]!
  }
  type Query {
    tips(status: [TipStatus!]): [Tip!]
    tip(id: String!): Tip
  }
`;
