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

  type SubAccount {
    address: String!
    account: Account!
  }

  type Voter {
    address: String!
    account: Account!
  }

  type CouncilVote {
    stake: String!
    formattedStake: String!
    votes: [Voter!]!
  }

  type Account {
    address: String!
    display: String!
    hasIdentity: Boolean!
    registration: DeriveAccountRegistration!
    balance: AccountBalance!
    subAccounts: [SubAccount!]
    councilVote: CouncilVote
  }

  type Query {
    account(address: String!): Account
  }
`;
