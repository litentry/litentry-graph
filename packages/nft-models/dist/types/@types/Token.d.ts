import type { ClassType, ClassProperties } from './Class';
export interface Token {
    tokenId: number;
    classId: number;
    type: ClassType;
    owner: string;
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
//# sourceMappingURL=Token.d.ts.map