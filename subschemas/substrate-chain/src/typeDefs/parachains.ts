export default /* GraphQL */ `
  type ParachainsInfo {
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
    nonVoters: [AccountInfo!]
  }
  type Lease {
    period: String
    blockTime: [String!]!
  }
  type ValidatorsGroup {
    groupIndex: String
    validators: [AccountInfo!]
  }
  type AccountInfo {
    address: String!
  }
  type Query {
    parachainsInfo: ParachainsInfo!
    parachains: [Parachain!]
    parachain(id: String!): Parachain
  }
`;
