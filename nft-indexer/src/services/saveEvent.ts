import { EventModel } from 'nft-models';
// import { triggerMutation } from '../utils/triggerMutation';

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<void> {
  const doc = new EventModel(event);

  await doc.save();

  // triggerMutation('ADD_EVENT', doc);

  console.log(`\nEvent:`, doc);
}
