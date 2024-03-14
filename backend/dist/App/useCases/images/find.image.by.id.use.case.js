"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindImageByIdUseCase = void 0;
class FindImageByIdUseCase {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async execute(imageId) {
        return await this.imageRepository.findById(imageId);
    }
}
exports.FindImageByIdUseCase = FindImageByIdUseCase;
//# sourceMappingURL=find.image.by.id.use.case.js.map