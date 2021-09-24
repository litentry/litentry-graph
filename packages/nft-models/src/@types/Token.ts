import type { ClassType, ClassProperties } from './Class';

export interface Token {
  tokenId: number; // index
  classId: number; // index - should be ObjectId
  type: ClassType; // index
  owner: string; // index
  properties: ClassProperties;
  burned?: boolean;
  used?: boolean;
  rarity?: number;
  metadata: {
    name: string;
    description: string;
    image: string;
  };
  metadataCID: string;
}
