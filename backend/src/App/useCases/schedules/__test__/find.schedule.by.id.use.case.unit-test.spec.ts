import { FindScheduleByIdUseCase } from '../find.schedule.by.id.use.case';
import { ScheduleEntity } from '../../../../App/entites/schedules.entity';
import { InMemoryScheduleRepository } from '../../../../../test/in-memory-repositories/schedule.in-memory.repository';
describe('Find schedule by id use case unit test', () => {
  it('Should be able to find a schedule by id', () => {
    const repository = new InMemoryScheduleRepository();
    const useCase = new FindScheduleByIdUseCase(repository);
    const newScheduleData = new ScheduleEntity({
      scheduleDate: new Date(),
      authorId: 'test id',
      createdAt: new Date(),
      client: 'example',
    });

    repository.schedules.push(newScheduleData);

    const result = useCase.execute(repository.schedules[0].id);

    expect(result).toBeDefined();
  });
});
