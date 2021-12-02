"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (pubsub) => ({
    eventCreated: {
        subscribe: () => pubsub.asyncIterator(['EVENT_CREATED']),
    },
    classCreated: {
        subscribe: () => pubsub.asyncIterator(['CLASS_CREATED']),
    },
    classUpdated: {
        subscribe: () => pubsub.asyncIterator(['CLASS_UPDATED']),
    },
    tokenUpdated: {
        subscribe: () => pubsub.asyncIterator(['TOKEN_UPDATED']),
    },
    tokenCreated: {
        subscribe: () => pubsub.asyncIterator(['TOKEN_CREATED']),
    },
});
//# sourceMappingURL=Subscription.js.map