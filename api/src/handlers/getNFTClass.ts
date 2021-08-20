import { Request, Response } from 'express';
import { getNFTClass as getClass } from '../services/NFTClassService';

export const getNFTClass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Validation needed on params
    const result = await getClass(parseInt(id));
    console.log(result);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
