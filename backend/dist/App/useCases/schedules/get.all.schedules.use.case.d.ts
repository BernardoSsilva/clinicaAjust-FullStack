import { ScheduleEntity } from 'src/App/entites/schedules.entity';
import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
export declare class GetAllSchedulesUseCase {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    execute(): Promise<ScheduleEntity[]>;
}
