import pubsub, { Sub } from './pubsub';

export default {
  eventCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['EVENT_CREATED']),
  },
  classCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_CREATED']),
  },
  tokenChanged: {
    subscribe: (): Sub => pubsub.asyncIterator(['TOKEN_CHANGED']),
  },
  // classesOfType: {
  //   subscribe: (): Sub => pubsub.asyncIterator(['CLASS_CREATED']),
  // },
};
