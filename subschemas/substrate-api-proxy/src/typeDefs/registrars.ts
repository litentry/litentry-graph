export default /* GraphQL */ `
  type Registrar {
    "id: Registrar index"
    id: String!
    address: String!
    account: Account!
    fee: String!
    formattedFee: String!
  }

  type RegistrarsSummary {
    registrarsCount: Int!
    lowestFee: String!
    formattedLowestFee: String!
    highestFee: String!
    formattedHighestFee: String!
    list: [Registrar!]!
  }

  type Query {
    registrarsSummary: RegistrarsSummary!
  }
`;
