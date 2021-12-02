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
// TODO maybe rework this... this is not really part of the schema
function publishers(pubsub) {
    return __awaiter(this, void 0, void 0, function* () {
        nft_models_1.TokenModel.watch(undefined, {
            fullDocument: 'updateLookup',
        }).on('change', (data) => {
            if (data.operationType === 'insert') {
                pubsub.publish('TOKEN_CREATED', {
                    tokenCreated: data.fullDocument,
                });
            }
            else {
                pubsub.publish('TOKEN_UPDATED', {
                    tokenUpdated: data.fullDocument,
                });
            }
        });
        nft_models_1.ClassModel.watch(undefined, {
            fullDocument: 'updateLookup',
        }).on('change', (data) => {
            if (data.operationType === 'insert') {
                pubsub.publish('CLASS_CREATED', {
                    classCreated: data.fullDocument,
                });
            }
            else {
                pubsub.publish('CLASS_UPDATED', {
                    classUpdated: data.fullDocument,
                });
            }
        });
        nft_models_1.EventModel.watch(undefined, {
            fullDocument: 'updateLookup',
        }).on('change', (data) => {
            pubsub.publish('EVENT_CREATED', {
                eventCreated: data.fullDocument,
            });
        });
    });
}
exports.default = publishers;
//# sourceMappingURL=publishers.js.map