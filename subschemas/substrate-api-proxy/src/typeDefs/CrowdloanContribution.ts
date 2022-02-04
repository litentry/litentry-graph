export default /* GraphQL */ `
  type CrowdloanContribution {
    paraId: String!
    contributorsCount: String!
  }
  type Query {
    crowdloanContribution(paraId: String!): CrowdloanContribution!
  }
`;
