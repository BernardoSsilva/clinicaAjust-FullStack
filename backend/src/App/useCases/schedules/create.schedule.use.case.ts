import { ScheduleRepository } from 'src/App/repositories/schedule.repository';
import { CreateScheduleDTO } from 'src/shared/dtos/schedules/createScheduleDto';

export class CreateScheduleUseCase {
  constructor(private scheduleRepository: ScheduleRepository) {}

  async execute(createScheduleDto: CreateScheduleDTO) {
    await this.scheduleRepository.insert(createScheduleDto);
  }
}
