import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
import { UpdateScheduleDto } from 'src/shared/dtos/schedules/updateScheduleDto';
export class UpdateScheduleUseCase {
  constructor(private scheduleRepository: ScheduleRepository) {}

  async execute(scheduleId: string, updateScheduleData: UpdateScheduleDto) {
    await this.scheduleRepository.update(scheduleId, updateScheduleData);
  }
}
