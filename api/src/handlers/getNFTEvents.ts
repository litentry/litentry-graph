import { Request, Response } from 'express';
import { getNFTEvents as getEvents } from '../services/NFTEventService';

export const getNFTEvents = async (req: Request, res: Response) => {
  try {
    const result = await getEvents();
    res.send(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
