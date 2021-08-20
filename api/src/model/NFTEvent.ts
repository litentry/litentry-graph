import { EventModel } from 'nft-models';

export const getAllEvents = async () => {
  return await EventModel.find({});
};
