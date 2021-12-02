"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = void 0;
const mongoose_1 = require("mongoose");
const tokenSchema = new mongoose_1.Schema({
    tokenId: { type: Number, required: true },
    classId: { type: Number, required: true },
    type: { type: String, required: true, enum: ['Claim', 'Simple', 'Merge'] },
    owner: { type: String, required: true },
    properties: {
        type: String,
        required: true,
        enum: ['None', 'Transferable', 'Burnable', 'Both'],
    },
    metadata: {
        type: {
            name: String,
            description: String,
            image: String,
        },
        required: true,
    },
    metadataCID: { type: String, required: true },
    burned: Boolean,
    used: Boolean,
    rarity: Number,
}, {
    timestamps: true,
});
// all the things we MIGHT want to index on
tokenSchema.index({ classId: 1 });
tokenSchema.index({ owner: 1 });
tokenSchema.index({ properties: 1 });
tokenSchema.index({ tokenId: 1 });
tokenSchema.index({ type: 1 });
exports.TokenModel = mongoose_1.model('Token', tokenSchema);
//# sourceMappingURL=TokenModel.js.map