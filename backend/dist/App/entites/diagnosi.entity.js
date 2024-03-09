"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisEntity = void 0;
const entity_1 = require("../../shared/entity");
class DiagnosisEntity extends entity_1.Entity {
    get authorId() {
        return this.props.authorId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get description() {
        return this.props.description;
    }
    set description(value) {
        this.description = value;
    }
}
exports.DiagnosisEntity = DiagnosisEntity;
//# sourceMappingURL=diagnosi.entity.js.map