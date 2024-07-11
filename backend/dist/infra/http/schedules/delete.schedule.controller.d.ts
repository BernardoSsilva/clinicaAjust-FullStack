import { DeleteScheduleUseCase } from '../../../App/useCases/schedules/delete.schedule.use.case';
export declare class DeleteScheduleController {
    private deleteScheduleUseCase;
    constructor(deleteScheduleUseCase: DeleteScheduleUseCase);
    execute(id: string): Promise<void>;
}
