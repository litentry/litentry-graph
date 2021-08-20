import { Request, Response } from 'express';
import { getNFTClasses as getClasses } from '../services/NFTClassService';

export const getNFTClasses = async (req: Request, res: Response) => {
  try {
    const result = await getClasses();
    console.log(result);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
