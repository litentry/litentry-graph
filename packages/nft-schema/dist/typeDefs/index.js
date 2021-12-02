"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const classes_1 = __importDefault(require("./classes"));
const events_1 = __importDefault(require("./events"));
const tokens_1 = __importDefault(require("./tokens"));
const base = apollo_server_core_1.gql `
  enum ClassType {
    Simple
    Merge
    Claim
  }

  enum ClassProperties {
    None
    Transferable
    Burnable
    Both
  }
`;
exports.default = [base, classes_1.default, events_1.default, tokens_1.default];
//# sourceMappingURL=index.js.map