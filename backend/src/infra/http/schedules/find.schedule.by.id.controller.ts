import { Controller, Get, Param } from '@nestjs/common';
import { FindScheduleByIdUseCase } from './../../../App/useCases/schedules/find.schedule.by.id.use.case';

@Controller('schedule/find/')
export class FindScheduleByIdController {
  constructor(private findScheduleByIdUseCase: FindScheduleByIdUseCase) {}

  @Get(':id')
  async execute(@Param('id') id: string) {
    return await this.findScheduleByIdUseCase.execute(id);
  }
}
