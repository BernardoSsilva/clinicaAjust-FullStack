"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindScheduleByIdUseCase = void 0;
class FindScheduleByIdUseCase {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async execute(scheduleId) {
        return await this.scheduleRepository.findById(scheduleId);
    }
}
exports.FindScheduleByIdUseCase = FindScheduleByIdUseCase;
//# sourceMappingURL=find.schedule.by.id.use.case.js.map