import { NFTEventData } from './';
export interface NFTTransferredTokenData extends NFTEventData {
  from: string;
  to: string;
  tokenId: number;
}
