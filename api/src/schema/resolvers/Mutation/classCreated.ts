import pubsub from '../pubsub';

export default async function classCreated(
  _: unknown,
  args: {
    _id: string;
    type: string;
    owner: string;
  }
): Promise<void> {
  pubsub.publish('CLASS_CREATED', {
    classCreated: args,
  });
}
