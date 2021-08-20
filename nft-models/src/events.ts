import { Schema, model } from 'mongoose';

// I've gone for IEvent here to make it clearer that this is an interface whilst the model isn't
export interface IEvent {
  name: string;
  data: unknown[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>(
  {
    name: { type: String, required: true },
    data: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

export const EventModel = model<IEvent>('Event', eventSchema);
