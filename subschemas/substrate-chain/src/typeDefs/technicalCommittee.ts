export default /* GraphQL */ `
  type TechnicalCommitteeSummary {
    memberCount: Int!
    activeProposal: Int!
    totalProposal: String!
    members: [Account!]!
  }

  type Query {
    technicalCommitteeSummary: TechnicalCommitteeSummary!
  }
`;
