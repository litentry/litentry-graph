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

export const getAllEvents = async () => {
  return await EventModel.find({});
};
