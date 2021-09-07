import pubsub from '../pubsub';

export default async function classUpdated(
  _: unknown,
  args: {
    _id: string;
    type: string;
    owner: string;
  }
): Promise<void> {
  pubsub.publish('CLASS_UPDATED', {
    classUpdated: args,
  });
}
