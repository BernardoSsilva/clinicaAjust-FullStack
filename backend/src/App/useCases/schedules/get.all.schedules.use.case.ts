import { ScheduleEntity } from 'src/App/entites/schedules.entity';
import { ScheduleRepository } from 'src/App/repositories/schedule.repository';

export class GetAllSchedulesUseCase {
  constructor(private scheduleRepository: ScheduleRepository) {}

  async execute(): Promise<ScheduleEntity[]> {
    return await this.scheduleRepository.getAll();
  }
}
