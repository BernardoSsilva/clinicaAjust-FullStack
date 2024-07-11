import { FindScheduleByIdUseCase } from './../../../App/useCases/schedules/find.schedule.by.id.use.case';
export declare class FindScheduleByIdController {
    private findScheduleByIdUseCase;
    constructor(findScheduleByIdUseCase: FindScheduleByIdUseCase);
    execute(id: string): Promise<import("src/App/entites/schedules.entity").ScheduleEntity>;
}
