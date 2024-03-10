import { ScheduleEntity } from '../schedules.entity';

describe('Schedule entity unit tests', () => {
  it('Should be able to create a new entity', () => {
    const newScheduleEntity = new ScheduleEntity({
      authorId: '123',
      client: 'testClient',
      scheduleDate: new Date(),
    });

    expect(newScheduleEntity).toBeDefined();
  });
});
