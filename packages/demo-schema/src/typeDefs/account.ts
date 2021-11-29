import { gql } from 'apollo-server-core';

export default gql`
  type IdentityJudgement {
    isUnknown: Boolean
    isFeePaid: Boolean
    asFeePaid: Balance
    isReasonable: Boolean
    isKnownGood: Boolean
    isOutOfDate: Boolean
    isLowQuality: Boolean
    isErroneous: Boolean
  }

  type RegistrationJudgement {
    index: Int
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

  type Account {
    address: String!
    display: String!
    registration: DeriveAccountRegistration!
  }

  extend type Query {
    account(address: String!): Account
  }
`;
