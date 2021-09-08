import pubsub, { Sub } from '../../pubsub';

export default {
  eventCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['EVENT_CREATED']),
  },
  class: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_UPDATED']),
  },
  token: {
    subscribe: (): Sub => pubsub.asyncIterator(['TOKEN_UPDATED']),
  },
};
