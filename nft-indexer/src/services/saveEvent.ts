import type { Event } from 'nft-models';
import { EventModel } from 'nft-models';

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<Event> {
  const doc = new EventModel(event);

  await doc.save();

  console.log(`Event:${event.name}`, doc);
  return doc;
}
