"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImageUseCase = void 0;
class CreateImageUseCase {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async execute(createImageDate) {
        await this.imageRepository.insert(createImageDate);
    }
}
exports.CreateImageUseCase = CreateImageUseCase;
//# sourceMappingURL=create.image.use.case.js.map