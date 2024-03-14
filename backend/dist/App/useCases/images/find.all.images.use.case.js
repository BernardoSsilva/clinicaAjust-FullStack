"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllImagesUseCase = void 0;
class FindAllImagesUseCase {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async execute() {
        return await this.imageRepository.getAll();
    }
}
exports.FindAllImagesUseCase = FindAllImagesUseCase;
//# sourceMappingURL=find.all.images.use.case.js.map