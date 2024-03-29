import { Body, Controller, Post } from "@nestjs/common";
import { CreateScheduleUseCase } from "../../../App/useCases/schedules/create.schedule.use.case";
import { CreateScheduleDTO } from "../../../shared/dtos/schedules/createScheduleDto";

@Controller("schedule/create")
export class CreateScheduleController{
    constructor(private createScheduleUseCase:CreateScheduleUseCase){}

    @Post()
    async execute(@Body() scheduleData: CreateScheduleDTO){
        await this.createScheduleUseCase.execute(scheduleData)
    }
}