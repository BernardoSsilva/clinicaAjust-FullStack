import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';
import { FindUserByEmailUseCase } from '../find.user.by.email.use-case';

describe('Find user by email use case unit test', () => {
  it('Should be able to find user by email', async () => {
    const repository = new InMemoryUserRepository();
    const useCase = new RegisterUserUseCase(repository);
    const newUserData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };
    await useCase.execute(newUserData)

    const findUserByEmail = new FindUserByEmailUseCase(repository);
    const foundUser = await findUserByEmail.execute(
        newUserData.userEmail,
    );
    console.log(foundUser);

    expect(foundUser).toBeDefined();
  });
});
