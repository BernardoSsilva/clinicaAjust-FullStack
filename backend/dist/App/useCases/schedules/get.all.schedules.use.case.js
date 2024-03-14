"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllSchedulesUseCase = void 0;
class GetAllSchedulesUseCase {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async execute() {
        return await this.scheduleRepository.getAll();
    }
}
exports.GetAllSchedulesUseCase = GetAllSchedulesUseCase;
//# sourceMappingURL=get.all.schedules.use.case.js.map