import type { PubSub } from 'graphql-subscriptions';
import { TokenModel, ClassModel, EventModel } from 'nft-models';

// TODO maybe rework this... this is not really part of the schema
export default async function publishers(pubsub: PubSub): Promise<void> {
  TokenModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    if (data.operationType === 'insert') {
      pubsub.publish('TOKEN_CREATED', {
        tokenCreated: data.fullDocument,
      });
    } else {
      pubsub.publish('TOKEN_UPDATED', {
        tokenUpdated: data.fullDocument,
      });
    }
  });

  ClassModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    if (data.operationType === 'insert') {
      pubsub.publish('CLASS_CREATED', {
        classCreated: data.fullDocument,
      });
    } else {
      pubsub.publish('CLASS_UPDATED', {
        classUpdated: data.fullDocument,
      });
    }
  });

  EventModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    pubsub.publish('EVENT_CREATED', {
      eventCreated: data.fullDocument,
    });
  });
}
