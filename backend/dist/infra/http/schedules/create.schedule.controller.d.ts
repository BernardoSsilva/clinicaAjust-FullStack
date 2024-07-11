import { CreateScheduleUseCase } from "../../../App/useCases/schedules/create.schedule.use.case";
import { CreateScheduleDTO } from "../../../shared/dtos/schedules/createScheduleDto";
export declare class CreateScheduleController {
    private createScheduleUseCase;
    constructor(createScheduleUseCase: CreateScheduleUseCase);
    execute(scheduleData: CreateScheduleDTO): Promise<void>;
}
