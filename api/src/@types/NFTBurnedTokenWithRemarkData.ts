import { NFTEventData } from './';
export interface NFTBurnedTokenWithRemarkData extends NFTEventData {
  owner: string;
  tokenId: number;
  remarkHash: string;
}
