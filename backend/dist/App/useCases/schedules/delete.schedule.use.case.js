"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteScheduleUseCase = void 0;
class DeleteScheduleUseCase {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async execute(scheduleId) {
        await this.scheduleRepository.delete(scheduleId);
    }
}
exports.DeleteScheduleUseCase = DeleteScheduleUseCase;
//# sourceMappingURL=delete.schedule.use.case.js.map