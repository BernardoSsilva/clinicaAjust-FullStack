import { ScheduleEntity } from '../../../../App/entites/schedules.entity';
import { InMemoryScheduleRepository } from '../../../../../test/in-memory-repositories/schedule.in-memory.repository';
import { GetAllSchedulesUseCase } from '../get.all.schedules.use.case';

describe('Get all schedules use case unit test', () => {
  it('should be able to find all schedules', () => {
    const repository = new InMemoryScheduleRepository();
    const useCase = new GetAllSchedulesUseCase(repository);

    repository.schedules.push(
      new ScheduleEntity({
        scheduleDate: new Date(),
        authorId: 'test id',
        createdAt: new Date(),
        client: 'example',
      }),
    );
    const result = useCase.execute();
    expect(result).toBeDefined();
  });
});
