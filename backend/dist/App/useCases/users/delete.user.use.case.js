"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        await this.userRepository.delete(userId);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=delete.user.use.case.js.map