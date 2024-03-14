"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScheduleUseCase = void 0;
class UpdateScheduleUseCase {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async execute(scheduleId, updateScheduleData) {
        await this.scheduleRepository.update(scheduleId, updateScheduleData);
    }
}
exports.UpdateScheduleUseCase = UpdateScheduleUseCase;
//# sourceMappingURL=update.schedule.use.case.js.map