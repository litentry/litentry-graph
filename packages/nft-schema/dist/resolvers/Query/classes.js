"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintableClasses = exports.classById = void 0;
const nft_models_1 = require("nft-models");
/*
this is the problem with discriminator models...
we know it's SimpleClass | MergeClass | ClaimClass
as in the filter, but we can't use that in the return type
*/
function classes(parent, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const classes = yield nft_models_1.ClassModel.find(filter);
        return classes;
    });
}
exports.default = classes;
function classById(parent, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const classModel = yield nft_models_1.ClassModel.findById(id);
        // sort out potentially null return type
        return classModel;
    });
}
exports.classById = classById;
function mintableClasses() {
    return __awaiter(this, void 0, void 0, function* () {
        const classes = yield nft_models_1.ClassModel.find({
            type: nft_models_1.ClassType.Simple,
            $expr: { $lt: ['$totalIssuance', '$quantity'] },
        });
        return classes;
    });
}
exports.mintableClasses = mintableClasses;
//# sourceMappingURL=classes.js.map