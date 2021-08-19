import { Schema, model } from 'mongoose';

interface Event {
  name: string;
  data: unknown[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<Event>(
  {
    name: { type: String, required: true },
    data: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

const EventModel = model<Event>('Event', eventSchema);

export async function saveEvent(event: {
  name: string;
  data: unknown[];
}): Promise<Event> {
  const doc = new EventModel(event);

  await doc.save();

  console.log(doc);
  return doc;
}
