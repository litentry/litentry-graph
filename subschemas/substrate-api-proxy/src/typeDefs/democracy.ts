export default /* GraphQL */ `
  type DemocracySummary {
    activeProposalsCount: Int!
    publicPropCount: Int!
    referendumTotal: Int!
    referenda: Int!
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

  type Democracy {
    proposals: [Proposal]!
    referendums: [Referendum!]!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracy: Democracy!
  }
`;
