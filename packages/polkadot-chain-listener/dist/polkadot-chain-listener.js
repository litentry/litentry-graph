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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.polkadotChainListener = void 0;
const block_listener_1 = __importDefault(require("./block-listener"));
const parse_events_1 = __importDefault(require("./parse-events"));
function hasLatestBlock(api, getLatestIndexedBlock) {
    return __awaiter(this, void 0, void 0, function* () {
        const latestBlockOnChain = yield (yield api.derive.chain.bestNumber()).toNumber();
        const latestIndexedBlock = yield getLatestIndexedBlock();
        return latestBlockOnChain === latestIndexedBlock;
    });
}
function polkadotChainListener(api, handlers, getLatestIndexedBlock, saveBlock) {
    return __awaiter(this, void 0, void 0, function* () {
        let upToDate = yield hasLatestBlock(api, getLatestIndexedBlock);
        while (!upToDate) {
            const latestIndexedBlock = yield getLatestIndexedBlock();
            const blockNumber = latestIndexedBlock + 1;
            const blockHash = yield api.rpc.chain.getBlockHash(blockNumber);
            const allRecords = yield (yield api.at(blockHash)).query.system.events();
            yield parse_events_1.default(handlers)(api, allRecords);
            yield saveBlock(blockNumber);
            console.log('\nIndexed block number:', latestIndexedBlock);
            upToDate = yield hasLatestBlock(api, getLatestIndexedBlock);
        }
        yield block_listener_1.default(api, parse_events_1.default(handlers));
    });
}
exports.polkadotChainListener = polkadotChainListener;
//# sourceMappingURL=polkadot-chain-listener.js.map