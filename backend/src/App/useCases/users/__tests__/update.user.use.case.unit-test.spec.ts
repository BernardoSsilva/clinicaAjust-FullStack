import { UpdateUserUseCase } from './../update.user.use.case';
import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';

describe('Update user use case unit tests', () => {
  it('Should be able to update a user', async () => {
    const repository = new InMemoryUserRepository();
    const updateUserUseCase = new UpdateUserUseCase(repository);
    const createUserUseCase = new RegisterUserUseCase(repository);
    const userData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };

    const newUserData = {
      userName: 'newTestValue',
      userEmail: 'newTestValue',
      userPassword: 'newTestValue',
      userLogin: 'newTestValue',
    };

    await createUserUseCase.execute(userData);

    expect(repository.users[0]).toBeDefined();

    await updateUserUseCase.execute(repository.users[0].id, newUserData)

    expect(repository.users[0].userEmail).toBe("newTestValue")

  });
});
