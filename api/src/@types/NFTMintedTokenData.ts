import { NFTEventData } from './';
export interface NFTMintedTokenData extends NFTEventData {
  from: string;
  to: string;
  quantity: number;
}
