import { ScheduleRepository } from "src/App/repositories/schedule.repository";
export declare class DeleteScheduleUseCase {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    execute(scheduleId: string): Promise<void>;
}
