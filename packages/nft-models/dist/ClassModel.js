"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeClassModel = exports.ClaimClassModel = exports.SimpleClassModel = exports.ClassModel = void 0;
const mongoose_1 = require("mongoose");
const _types_1 = require("./@types");
const classSchema = new mongoose_1.Schema({
    _id: Number,
    type: {
        type: String,
        required: true,
        enum: [_types_1.ClassType.Claim, _types_1.ClassType.Simple, _types_1.ClassType.Merge],
    },
    owner: { type: String, required: true },
    totalIssuance: { type: Number, required: true },
    startBlock: Number,
    endBlock: Number,
    properties: {
        type: String,
        required: true,
        enum: [
            _types_1.ClassProperties.None,
            _types_1.ClassProperties.Transferable,
            _types_1.ClassProperties.Burnable,
            _types_1.ClassProperties.Both,
        ],
    },
}, {
    timestamps: true,
});
// all the things we MIGHT want to index on
classSchema.index({ owner: 1 });
classSchema.index({ properties: 1 });
classSchema.index({ type: 1 });
const options = {
    discriminatorKey: 'type',
};
const simpleClassSchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
}, options);
const claimClassSchema = new mongoose_1.Schema({
    metadata: {
        type: {
            name: String,
            description: String,
            image: String,
            merkleTree: { type: String, required: true },
        },
        required: true,
    },
    metadataCID: { type: String, required: true },
    merkleRoot: { type: String, required: true },
}, options);
const mergeClassSchema = new mongoose_1.Schema({
    metadata: {
        type: {
            name: String,
            description: String,
            image: String,
        },
        required: true,
    },
    burnOnMerge: { type: Boolean, required: true },
    mergableClassIds: {
        type: [Number],
        required: true,
        validate: (v) => v.length === 2,
    },
}, options);
exports.ClassModel = mongoose_1.model('Class', classSchema);
exports.SimpleClassModel = exports.ClassModel.discriminator(_types_1.ClassType.Simple, simpleClassSchema);
exports.ClaimClassModel = exports.ClassModel.discriminator(_types_1.ClassType.Claim, claimClassSchema);
exports.MergeClassModel = exports.ClassModel.discriminator(_types_1.ClassType.Merge, mergeClassSchema);
//# sourceMappingURL=ClassModel.js.map