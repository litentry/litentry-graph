export default /* GraphQL */ `
  type CrowdloanContribution {
    paraId: String!
    contributorsCount: Int!
  }
  type Query {
    crowdloanContribution(paraId: String!): CrowdloanContribution!
  }
`;
