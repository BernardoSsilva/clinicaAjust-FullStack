import { UpdateScheduleUseCase } from '../../../App/useCases/schedules/update.schedule.use.case';
import { UpdateScheduleDto } from '../../../shared/dtos/schedules/updateScheduleDto';
export declare class UpdateScheduleController {
    private updateScheduleUseCase;
    constructor(updateScheduleUseCase: UpdateScheduleUseCase);
    execute(id: string, updateData: UpdateScheduleDto): Promise<void>;
}
