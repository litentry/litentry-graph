import type { PubSub } from 'graphql-subscriptions';

type Sub = AsyncIterator<unknown, unknown, undefined>;

export default (
  pubsub: PubSub
): {
  [eventName: string]: {
    subscribe: () => Sub;
  };
} => ({
  eventCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['EVENT_CREATED']),
  },
  classCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_CREATED']),
  },
  classUpdated: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_UPDATED']),
  },
  tokenUpdated: {
    subscribe: (): Sub => pubsub.asyncIterator(['TOKEN_UPDATED']),
  },
  tokenCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['TOKEN_CREATED']),
  },
});
