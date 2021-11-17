import { gql } from 'apollo-server-core';

export default gql`
  type Registrar {
    index: Int!
    address: String!
    lastBlockUpdate: Int!
  }

  extend type Query {
    registrars: [Registrar]!
    registrarById(_id: String): Registrar
  }
`;
