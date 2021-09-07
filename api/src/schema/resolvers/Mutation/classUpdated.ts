import type { UnknownClass } from 'nft-models';
import pubsub from '../pubsub';

export default async function classUpdated(
  _: unknown,
  data: { class: UnknownClass }
): Promise<UnknownClass> {
  pubsub.publish('CLASS_UPDATED', {
    class: data.class,
  });
  return data.class;
}
