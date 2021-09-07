import pubsub from '../pubsub';

export default async function addEvent(
  _: unknown,
  args: {
    doc: {
      _id: string;
      name: string;
      data: [];
      createdAt: string;
      updatedAt: string;
    };
  }
): Promise<void> {
  console.log(`DOC`);
  console.log(args.doc);

  console.log(`Event created`);
  pubsub.publish('EVENT_CREATED', { eventCreated: args.doc });
}
