import { ScheduleEntity } from '../../../../App/entites/schedules.entity';
import { InMemoryScheduleRepository } from '../../../../../test/in-memory-repositories/schedule.in-memory.repository';
import { DeleteScheduleUseCase } from '../delete.schedule.use.case';
describe('Delete schedule by id use case unit test', () => {
  it('Should be able to Delete a schedule by id', () => {
    const repository = new InMemoryScheduleRepository();
    const useCase = new DeleteScheduleUseCase(repository);
    const newScheduleData = new ScheduleEntity({
      scheduleDate: new Date(),
      authorId: 'test id',
      createdAt: new Date(),
      client: 'example',
    });

    repository.schedules.push(newScheduleData);

    const result = useCase.execute(repository.schedules[0].id);

    expect(repository.schedules).toHaveLength(0);
  });
});
