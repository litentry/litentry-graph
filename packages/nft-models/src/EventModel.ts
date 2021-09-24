import { Schema, model } from 'mongoose';
import type { Event } from './@types';

const eventSchema = new Schema<Event>(
  {
    name: { type: String, required: true },
    data: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

export const EventModel = model<Event>('Event', eventSchema);
