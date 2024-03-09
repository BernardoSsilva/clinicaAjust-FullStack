"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEntity = void 0;
const entity_1 = require("../../shared/entity");
class ImageEntity extends entity_1.Entity {
    get createdAt() {
        return this.createdAt;
    }
    get diagnosisId() {
        return this.diagnosisId;
    }
    get stored() {
        return this.stored;
    }
    set stored(value) {
        this.stored = value;
    }
    get imageName() {
        return this.imageName;
    }
    set imageName(value) {
        this.imageName = value;
    }
    set sizeKb(value) {
        this.sizeKb = value;
    }
    get sizeKb() {
        return this.sizeKb;
    }
}
exports.ImageEntity = ImageEntity;
//# sourceMappingURL=image.entity.js.map