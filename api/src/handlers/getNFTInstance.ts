import { Request, Response } from 'express';
import { getNFTInstances as getInstances } from '../services/NFTInstanceService';

export const getNFTInstance = async (req: Request, res: Response) => {
  try {
    const result = await getInstances();
    console.log(result);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
