import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';
import { FindUserByIdUseCase } from '../find.user.by.id.use.case';

describe('Find user by id use case unit test', () => {
  it('should be able to find a user', async () => {
    const repository = new InMemoryUserRepository();
    const useCase = new RegisterUserUseCase(repository);
    const newUserData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };
    await useCase.execute(newUserData);

    const findAllUsersUseCase = new FindUserByIdUseCase(repository);
    const foundUser = await findAllUsersUseCase.execute(repository.users[0].id);

    expect(foundUser).toBeDefined();
  });
});
