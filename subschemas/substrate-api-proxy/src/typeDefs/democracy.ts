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
    method: String!
    section: String!
    args: [ProposalArg!]!
    hash: String!
    proposer: Proposer!
  }

  type Democracy {
    proposals: [Proposal]!
  }

  type Query {
    democracySummary: DemocracySummary!
    democracy: Democracy!
  }
`;