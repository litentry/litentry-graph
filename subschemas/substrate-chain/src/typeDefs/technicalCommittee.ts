export default /* GraphQL */ `
  type TechnicalCommitteeSummary {
    memberCount: Int!
    activeProposalCount: Int!
    totalProposalCount: String!
    members: [AccountInfo!]!
  }

  type Query {
    technicalCommitteeSummary: TechnicalCommitteeSummary!
  }
`;
