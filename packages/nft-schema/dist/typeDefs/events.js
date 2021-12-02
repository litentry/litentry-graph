"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
exports.default = apollo_server_core_1.gql `
  type Event {
    _id: String!
    name: String!
    data: JSON!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    events: [Event]
  }

  extend type Subscription {
    eventCreated: Event
  }
`;
//# sourceMappingURL=events.js.map