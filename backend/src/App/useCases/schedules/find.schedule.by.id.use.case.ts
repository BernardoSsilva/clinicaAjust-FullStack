import { ScheduleEntity } from 'src/App/entites/schedules.entity';
import { ScheduleRepository } from 'src/App/repositories/schedule.repository';

export class FindScheduleByIdUseCase {
  constructor(private scheduleRepository: ScheduleRepository) {}

  async execute(scheduleId: string): Promise<ScheduleEntity> {
    return await this.scheduleRepository.findById(scheduleId);
  }
}
