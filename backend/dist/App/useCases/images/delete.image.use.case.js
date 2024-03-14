"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImageUseCase = void 0;
class DeleteImageUseCase {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async execute(imageId) {
        await this.imageRepository.delete(imageId);
    }
}
exports.DeleteImageUseCase = DeleteImageUseCase;
//# sourceMappingURL=delete.image.use.case.js.map