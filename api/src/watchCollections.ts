import { TokenModel, ClassModel, EventModel } from 'nft-models';
import pubsub from './pubsub';

export default async function watchCollections(): Promise<void> {
  TokenModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    pubsub.publish('TOKEN_UPDATED', {
      token: data.fullDocument,
    });
  });

  ClassModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    pubsub.publish('CLASS_UPDATED', {
      class: data.fullDocument,
    });
  });

  EventModel.watch(undefined, {
    fullDocument: 'updateLookup',
  }).on('change', (data) => {
    pubsub.publish('EVENT_CREATED', {
      class: data.fullDocument,
    });
  });
}
