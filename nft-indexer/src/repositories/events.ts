import { EventModel, IEvent } from 'nft-models';

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<IEvent> {
  const doc = new EventModel(event);

  await doc.save();

  console.log(doc);
  return doc;
}
