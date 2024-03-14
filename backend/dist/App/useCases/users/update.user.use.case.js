"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId, updateUserDto) {
        await this.userRepository.update(userId, updateUserDto);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=update.user.use.case.js.map