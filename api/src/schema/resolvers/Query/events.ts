import { EventModel, Event } from 'nft-models';

export default async function events(): Promise<Event[]> {
  const events = await EventModel.find().sort({ createdAt: 'desc' });
  return events;
}
