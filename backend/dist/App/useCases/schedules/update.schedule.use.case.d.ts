import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
import { UpdateScheduleDto } from 'src/shared/dtos/schedules/updateScheduleDto';
export declare class UpdateScheduleUseCase {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    execute(scheduleId: string, updateScheduleData: UpdateScheduleDto): Promise<void>;
}
