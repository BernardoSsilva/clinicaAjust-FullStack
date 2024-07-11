import { GetAllSchedulesUseCase } from './../../../App/useCases/schedules/get.all.schedules.use.case';
export declare class GetAllSchedulesController {
    private getAllSchedulesUseCase;
    constructor(getAllSchedulesUseCase: GetAllSchedulesUseCase);
    execute(): Promise<import("src/App/entites/schedules.entity").ScheduleEntity[]>;
}
