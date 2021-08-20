import { Request, Response } from 'express';
import { getNFTInstance as getInstance } from '../services/NFTInstanceService';

export const getNFTInstances = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Validation needed on params
    const result = await getInstance(parseInt(id));
    console.log(result);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
