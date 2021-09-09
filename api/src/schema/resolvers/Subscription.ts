import pubsub, { Sub } from '../../pubsub';

export default {
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
};
