import { EventModel } from 'nft-models';

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<void> {
  const doc = new EventModel(event);

  await doc.save();

  console.log(`\nEvent:`, doc);
}
