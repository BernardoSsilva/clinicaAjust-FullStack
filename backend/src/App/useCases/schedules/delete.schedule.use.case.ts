import { ScheduleRepository } from "src/App/repositories/schedule.repository";

export class DeleteScheduleUseCase{
    constructor(private scheduleRepository:ScheduleRepository){}

    async execute(scheduleId:string){
        await this.scheduleRepository.delete(scheduleId)
    }
}