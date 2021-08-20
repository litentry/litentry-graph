import { NFTEventData } from './';
export interface NFTClaimedTokenData extends NFTEventData {
  claimer: string;
}
