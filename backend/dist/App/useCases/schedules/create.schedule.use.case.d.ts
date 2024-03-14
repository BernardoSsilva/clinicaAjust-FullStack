import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
import { CreateScheduleDTO } from 'src/shared/dtos/schedules/createScheduleDto';
export declare class CreateScheduleUseCase {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    execute(createScheduleDto: CreateScheduleDTO): Promise<void>;
}
