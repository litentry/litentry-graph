export default /* GraphQL */ `
  type Registrar {
    "id: Registrar index"
    id: String!
    address: String
    account: Account
    fee: String
    formatedFee: String
  }

  type Query {
    registrars: [Registrar!]
  }
`;
