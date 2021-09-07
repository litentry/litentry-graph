import pubsub from '../pubsub';

export default async function addEvent(
  _: unknown,
  args: { name: string }
): Promise<void> {
  console.log(`Event created`);
  pubsub.publish('EVENT_CREATED', { eventCreated: args });
}
