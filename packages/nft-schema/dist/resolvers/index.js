"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const Subscription_1 = __importDefault(require("./Subscription"));
const Class_1 = __importDefault(require("./Class"));
exports.default = {
    Query: Query_1.default,
    Subscription: Subscription_1.default,
    other: {
        Class: Class_1.default,
    },
};
//# sourceMappingURL=index.js.map