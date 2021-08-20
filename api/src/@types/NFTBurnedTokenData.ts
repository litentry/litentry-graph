import { NFTEventData } from './';
export interface NFTBurnedTokenData extends NFTEventData {
  owner: string;
  tokenId: number;
}
