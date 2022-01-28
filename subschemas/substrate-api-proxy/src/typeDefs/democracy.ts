export default /* GraphQL */ `
  type DemocracySummary {
    activeProposals: Int!
    proposals: String!
    referendums: String!
    activeReferendums: Int!
    launchPeriod: String!
  }

  type ProposalArg {
    name: String
    type: String
    value: String
    subCalls: [Proposal]
  }

  type Proposer {
    address: String!
    account: Account
  }

  type Proposal {
    index: String!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    proposer: Proposer!
  }

  type Referendum {
    index: String!
    meta: String!
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    endPeriod: [String!]!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracyProposals: [Proposal!]!
    democracyReferendums: [Referendum!]!
  }
`;
