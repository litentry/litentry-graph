import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

export type Sub = AsyncIterator<unknown, unknown, undefined>;

export default pubsub;
