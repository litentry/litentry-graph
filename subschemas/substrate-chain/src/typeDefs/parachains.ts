export default /* GraphQL */ `
  type ParachainsSummary {
    parachainsCount: Int!
    parathreadsCount: Int!
    proposalsCount: Int!
    leasePeriod: LeasePeriod!
  }
  type LeasePeriod {
    currentLease: String!
    totalPeriod: String!
    progressPercent: Int!
    remainder: String!
    remainderParts: [String!]!
    remainderBlockTime: String!
  }
  type Parachain {
    id: String!
    name: String
    lease: Lease
    lifecycle: String!
    lastIncludedBlock: String!
    lastBackedBlock: String!
    homepage: String
    validators: ValidatorsGroup
    nonVoters: [Account!]!
  }
  type Lease {
    period: String
    blockTime: [String!]!
  }
  type ValidatorsGroup {
    groupIndex: String
    validators: [Account!]!
  }

  type Query {
    parachainsSummary: ParachainsSummary!
    parachains: [Parachain!]
    parachain(id: String!): Parachain
  }
`;
