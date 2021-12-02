declare const _default: {
    Query: {
        classes: typeof import("./Query/classes").default;
        classById: typeof import("./Query/classes").classById;
        mintableClasses: typeof import("./Query/classes").mintableClasses;
        events: typeof import("./Query/events").default;
        tokens: typeof import("./Query/tokens").default;
        burnableTokens: typeof import("./Query/burnableTokens").default;
        transferableTokens: typeof import("./Query/transferableTokens").default;
    };
    Subscription: (pubsub: import("graphql-subscriptions").PubSub) => {
        [eventName: string]: {
            subscribe: () => AsyncIterator<unknown, unknown, undefined>;
        };
    };
    other: {
        Class: {
            tokens(parent: {
                _id: string;
            }): Promise<import("nft-models").Token[]>;
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map