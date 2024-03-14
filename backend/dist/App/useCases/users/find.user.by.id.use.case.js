"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByIdUseCase = void 0;
class FindUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        return await this.userRepository.findById(userId);
    }
}
exports.FindUserByIdUseCase = FindUserByIdUseCase;
//# sourceMappingURL=find.user.by.id.use.case.js.map