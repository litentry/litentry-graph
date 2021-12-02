"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  type TokenMetadata {
    name: String
    description: String
    image: String
  }

  type Token {
    _id: String!
    tokenId: Int!
    classId: Int!
    type: ClassType!
    owner: String!
    properties: ClassProperties!
    metadata: TokenMetadata!
    metadataCID: String!
    burned: Boolean
    used: Boolean
    rarity: Int
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    tokens(
      _id: String
      tokenId: Int
      classId: Int
      owner: String
      type: ClassType
      properties: ClassProperties
    ): [Token]
    burnableTokens(owner: String): [Token]
    transferableTokens(owner: String): [Token]
  }

  extend type Subscription {
    tokenUpdated: Token
    tokenCreated(classId: Int): Token
  }
`;
//# sourceMappingURL=tokens.js.map