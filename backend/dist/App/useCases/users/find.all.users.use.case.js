"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUsersUseCase = void 0;
class FindAllUsersUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.getAll();
    }
}
exports.FindAllUsersUseCase = FindAllUsersUseCase;
//# sourceMappingURL=find.all.users.use.case.js.map