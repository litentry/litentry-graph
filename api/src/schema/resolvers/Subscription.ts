import pubsub, { Sub } from './pubsub';

export default {
  eventCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['EVENT_CREATED']),
  },
  classCreated: {
    subscribe: (): Sub => pubsub.asyncIterator(['CLASS_CREATED']),
  },
  // classesOfType: {
  //   subscribe: (): Sub => pubsub.asyncIterator(['CLASS_CREATED']),
  // },
};
