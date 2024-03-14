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
    constructor(props) {
        super(props);
        this.validate();
    }
    async validate() {
        const errors = [];
        const diagnosisIdErrors = this.validateDiagnosisId(this.diagnosisId);
        const storedNameErrors = this.validateStored(this.stored);
        const imageNameErrors = this.validateImageName(this.imageName);
        const sizeKbErrors = this.validateSizeKb(this.sizeKb);
        if (diagnosisIdErrors)
            errors.push(diagnosisIdErrors);
        if (storedNameErrors)
            errors.push(storedNameErrors);
        if (imageNameErrors)
            errors.push(imageNameErrors);
        if (sizeKbErrors)
            errors.push(sizeKbErrors);
        return errors;
    }
    validateDiagnosisId(diagnosisId) {
        if (!diagnosisId)
            return 'o Id do diagnostico é requirido';
        if (typeof diagnosisId !== 'string')
            return 'O id do diagnostico deve ser uma instancia de caracteres';
        return null;
    }
    validateStored(stored) {
        if (!stored)
            return 'o nome da imagem armazenada é requirido';
        if (typeof stored !== 'string')
            return 'O nome da imagem armazenada deve ser uma instancia de caracteres';
        return null;
    }
    validateImageName(imageName) {
        if (!imageName)
            return 'o nome da imagem  é requirido';
        if (typeof imageName !== 'string')
            return 'O nome da imagem  deve ser uma instancia de caracteres';
        return null;
    }
    validateSizeKb(sizeKb) {
        if (!sizeKb)
            return 'o tamanho da imagem  é requirido';
        if (typeof sizeKb !== 'number')
            return 'O tamanho da imagem  deve ser uma instancia de números';
        return null;
    }
}
exports.ImageEntity = ImageEntity;
//# sourceMappingURL=image.entity.js.map