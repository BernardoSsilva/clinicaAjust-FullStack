"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEntity = void 0;
const entity_1 = require("../../shared/entity");
class ImageEntity extends entity_1.Entity {
    get createdAt() {
        return this.props.createdAt;
    }
    get diagnosisId() {
        return this.props.diagnosisId;
    }
    get stored() {
        return this.props.stored;
    }
    set stored(value) {
        this.stored = value;
    }
    get imageName() {
        return this.props.imageName;
    }
    set imageName(value) {
        this.imageName = value;
    }
    set sizeKb(value) {
        this.sizeKb = value;
    }
    get sizeKb() {
        return this.props.sizeKb;
    }
}
exports.ImageEntity = ImageEntity;
//# sourceMappingURL=image.entity.js.map