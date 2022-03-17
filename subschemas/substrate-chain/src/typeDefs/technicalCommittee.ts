export default /* GraphQL */ `
  type TechnicalCommitteeSummary {
    memberCount: Int!
    activeProposalCount: Int!
    totalProposalCount: String!
    members: [NestedAccount!]!
  }

  type Query {
    technicalCommitteeSummary: TechnicalCommitteeSummary!
  }
`;
