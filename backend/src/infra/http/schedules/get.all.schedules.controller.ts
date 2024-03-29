import { GetAllSchedulesUseCase } from './../../../App/useCases/schedules/get.all.schedules.use.case';
import { Controller, Get } from '@nestjs/common';

@Controller('schedule/all')
export class GetAllSchedulesController {
  constructor(private getAllSchedulesUseCase: GetAllSchedulesUseCase) {}

  @Get()
  async execute() {
    return await this.getAllSchedulesUseCase.execute();
  }
}
