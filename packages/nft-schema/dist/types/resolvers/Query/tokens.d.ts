import { Token, ClassProperties, ClassType } from 'nft-models';
export default function tokens(parent: undefined, filter: {
    _id: string;
    tokenId: number;
    classId: number;
    owner: string;
    type: ClassType;
    properties: ClassProperties;
}): Promise<Token[]>;
//# sourceMappingURL=tokens.d.ts.map