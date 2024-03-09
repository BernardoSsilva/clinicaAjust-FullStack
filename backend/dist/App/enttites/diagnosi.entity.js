"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisEntity = void 0;
const entity_1 = require("../../shared/entity");
class DiagnosisEntity extends entity_1.Entity {
    get authorId() {
        return this.authorId;
    }
    get createdAt() {
        return this.createdAt;
    }
    get description() {
        return this.description;
    }
    set description(value) {
        this.description = value;
    }
}
exports.DiagnosisEntity = DiagnosisEntity;
//# sourceMappingURL=diagnosi.entity.js.map