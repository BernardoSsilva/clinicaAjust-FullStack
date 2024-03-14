"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScheduleUseCase = void 0;
class CreateScheduleUseCase {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async execute(createScheduleDto) {
        await this.scheduleRepository.insert(createScheduleDto);
    }
}
exports.CreateScheduleUseCase = CreateScheduleUseCase;
//# sourceMappingURL=create.schedule.use.case.js.map