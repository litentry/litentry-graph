import type { PubSub } from 'graphql-subscriptions';
declare type Sub = AsyncIterator<unknown, unknown, undefined>;
declare const _default: (pubsub: PubSub) => {
    [eventName: string]: {
        subscribe: () => Sub;
    };
};
export default _default;
//# sourceMappingURL=Subscription.d.ts.map