import { ScheduleEntity } from '../../../../App/entites/schedules.entity';
import { InMemoryScheduleRepository } from '../../../../../test/in-memory-repositories/schedule.in-memory.repository';
import { UpdateScheduleUseCase } from '../update.schedule.use.case';

describe('Update schedule by id use case unit test', () => {
  it('Should be able to update a schedule by id', () => {
    const repository = new InMemoryScheduleRepository();
    const useCase = new UpdateScheduleUseCase(repository);
    const newScheduleData = new ScheduleEntity({
      scheduleDate: new Date(),
      authorId: 'test id',
      createdAt: new Date(),
      client: 'example',
    });

    repository.schedules.push(newScheduleData);
    expect(repository.schedules[0].client).toEqual('example');

    const result = useCase.execute(repository.schedules[0].id, {
      client: 'exampleNewValue',
    });
    expect(repository.schedules[0].client).toEqual('exampleNewValue');
  });
});
