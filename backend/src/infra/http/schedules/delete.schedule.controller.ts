import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteScheduleUseCase } from '../../../App/useCases/schedules/delete.schedule.use.case';

@Controller('schedule/delete')
export class DeleteScheduleController {
  constructor(private deleteScheduleUseCase: DeleteScheduleUseCase) {}

  @Delete('/:id')
  async execute(@Param('id') id: string) {
    return await this.deleteScheduleUseCase.execute(id);
  }
}
