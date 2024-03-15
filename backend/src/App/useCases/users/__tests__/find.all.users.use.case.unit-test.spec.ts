import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';
import { FindAllUsersUseCase } from '../find.all.users.use.case';
describe('FInd all users use case unit tests', () => {
  it('Should be able to create a new user', async () => {
    const repository = new InMemoryUserRepository();
    const useCase = new RegisterUserUseCase(repository);
    const newUserData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };
    await useCase.execute(newUserData);

    const findAllUsersUseCase = new FindAllUsersUseCase(repository);
    const allUsers = await findAllUsersUseCase.execute();

    expect(allUsers).toBeDefined();
  });
});
