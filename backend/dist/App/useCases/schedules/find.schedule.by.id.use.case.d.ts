import { ScheduleEntity } from 'src/App/entites/schedules.entity';
import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
export declare class FindScheduleByIdUseCase {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    execute(scheduleId: string): Promise<ScheduleEntity>;
}
