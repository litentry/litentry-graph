import { TokenModel, Token } from 'nft-models';

export default {
  async tokens(parent: { _id: string }): Promise<Token[]> {
    const tokens = await TokenModel.find({ classId: parseInt(parent._id) });
    return tokens;
  },
};
