"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    data: { type: [], required: true },
}, {
    timestamps: true,
});
exports.EventModel = mongoose_1.model('Event', eventSchema);
//# sourceMappingURL=EventModel.js.map