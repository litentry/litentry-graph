export default /* GraphQL */ `
  type TechnicalCommitteeSummary {
    memberCount: Int!
    activeProposalCount: Int!
    totalProposalCount: String!
    members: [Account!]!
  }

  type Query {
    technicalCommitteeSummary: TechnicalCommitteeSummary!
  }
`;
