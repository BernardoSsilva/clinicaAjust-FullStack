import { InMemoryScheduleRepository } from '../../../../../test/in-memory-repositories/schedule.in-memory.repository';
import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { CreateScheduleUseCase } from '../create.schedule.use.case';


describe('Create user  use case unit tests', () => {
  it('Should be able to create a new user', async () => {
    const repository = new InMemoryScheduleRepository();
    const useCase = new CreateScheduleUseCase(repository);
    const newScheduleData = {
        scheduleDate: new Date(),
        authorId: "test id",
        createdAt: new Date(),
        client: "example"
    };

    await useCase.execute(newScheduleData)

    expect(repository.schedules[0]).toBeDefined()
  });
});
