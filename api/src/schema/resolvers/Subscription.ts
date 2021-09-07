import pubsub, { Sub } from './pubsub';

export default {
  eventCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['EVENT_CREATED']),
  },
  classes: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_UPDATED']),
  },
  tokens: {
    subscribe: (): Sub => pubsub.asyncIterator(['TOKEN_UPDATED']),
  },
};
