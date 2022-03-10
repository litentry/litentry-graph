export default /* GraphQL */ `
  type TechCommitteeSummary {
    memberCount: Int!
    activeProposal: Int!
    totalProposal: String!
    members: [Account!]!
  }

  type Query {
    techCommitteeSummary: TechCommitteeSummary!
  }
`;
