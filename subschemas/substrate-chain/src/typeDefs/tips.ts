export default /* GraphQL */ `
  enum TipStatus {
    Closed
    Opened
    Retracted
    Slashed
  }

  enum TipsOrderByInput {
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    tipValue_ASC
    tipValue_DESC
    deposit_ASC
    deposit_DESC
    closes_ASC
    closes_DESC
    blockNumber_ASC
    blockNumber_DESC
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
    tips(status: [TipStatus!], limit: Int, offset: Int, orderBy: TipsOrderByInput): [Tip!]
    tip(id: String!): Tip
  }
`;
