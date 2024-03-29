import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateScheduleUseCase } from '../../../App/useCases/schedules/update.schedule.use.case';
import { UpdateScheduleDto } from '../../../shared/dtos/schedules/updateScheduleDto';

@Controller('schedule/update')
export class UpdateScheduleController {
  constructor(private updateScheduleUseCase: UpdateScheduleUseCase) {}

  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() updateData: UpdateScheduleDto,
  ) {
    return await this.updateScheduleUseCase.execute(id, updateData);
  }
}
