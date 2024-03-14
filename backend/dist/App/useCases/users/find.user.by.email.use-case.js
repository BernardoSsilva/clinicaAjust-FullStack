"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByEmailUseCase = void 0;
class FindUserByEmailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userEmail) {
        return await this.userRepository.findByEmail(userEmail);
    }
}
exports.FindUserByEmailUseCase = FindUserByEmailUseCase;
//# sourceMappingURL=find.user.by.email.use-case.js.map