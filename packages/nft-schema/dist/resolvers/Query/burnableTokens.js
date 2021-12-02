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
const nft_models_1 = require("nft-models");
function burnableTokens(parent, { owner }) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = yield nft_models_1.TokenModel.find({
            owner,
            burned: false,
            used: false,
        })
            .where('properties')
            .in([nft_models_1.ClassProperties.Both, nft_models_1.ClassProperties.Burnable]);
        return tokens;
    });
}
exports.default = burnableTokens;
//# sourceMappingURL=burnableTokens.js.map