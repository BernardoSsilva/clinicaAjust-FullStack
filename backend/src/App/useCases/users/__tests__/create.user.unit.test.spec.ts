import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';

describe('Create user  use case unit tests', () => {
  it('Should be able to create a new user', async () => {
    const repository = new InMemoryUserRepository();
    const useCase = new RegisterUserUseCase(repository);
    const newUserData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };

    await useCase.execute(newUserData)

    expect(repository.users[0]).toBeDefined()
  });
});
