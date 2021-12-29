export default /* GraphQL */ `
  type TreasuryBalance {
    accountId: String!
    accountNonce: String!
    freeBalance: String!
    frozenFee: String!
    frozenMisc: String!
    reservedBalance: String!
    votingBalance: String!
  }
  type TreasurySummary {
    activeProposals: Int!
    proposalCount: String!
    approvedProposals: Int!
    spendPeriod: String!
    treasuryBalance: TreasuryBalance!
    burn: String
  }
  type Query {
    treasurySummary: TreasurySummary!
  }
`;
