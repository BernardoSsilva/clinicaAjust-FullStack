"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
class RegisterUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userData) {
        this.userRepository.insert(userData);
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=create.user.use-case.js.map