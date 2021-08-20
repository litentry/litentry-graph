import { NFTEventData } from './';
export interface NFTEvent {
  data: NFTEventData;
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
