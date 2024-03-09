"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const crypto_1 = require("crypto");
class Entity {
    constructor(_id, _props) {
        this.id = _id || (0, crypto_1.randomUUID)();
        this.props = _props;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map