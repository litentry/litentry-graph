export default /* GraphQL */ `
  type IdentityJudgement {
    isUnknown: Boolean
    isFeePaid: Boolean
    isReasonable: Boolean
    isKnownGood: Boolean
    isOutOfDate: Boolean
    isLowQuality: Boolean
    isErroneous: Boolean
  }

  type RegistrationJudgement {
    registrarIndex: Int
    judgement: IdentityJudgement
  }

  type DeriveAccountRegistration {
    display: String
    displayParent: String
    email: String
    image: String
    legal: String
    pgp: String
    riot: String
    twitter: String
    web: String
    judgements: [RegistrationJudgement]
  }

  type AccountBalance {
    total: String!
    formattedTotal: String!
    reserved: String!
    formattedReserved: String!
    free: String!
    formattedFree: String!
    freeFrozen: String!
    formattedFreeFrozen: String!
  }

  type Account {
    address: String!
    display: String!
    hasIdentity: Boolean!
    registration: DeriveAccountRegistration
    balance: AccountBalance
    subAccounts: [AccountInfo!]
  }

  type AccountInfo {
    address: String!
    account: Account!
  }

  type Query {
    account(address: String!): Account
    accounts(addresses: [String!]!): [Account!]!
  }
`;
