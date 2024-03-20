import { UserEntity } from 'src/App/entites/user.entity';
import { InMemoryUserRepository } from '../../../../../test/in-memory-repositories/user.in-memory.repository';
import { RegisterUserUseCase } from '../create.user.use-case';
import { DeleteUserUseCase } from '../delete.user.use.case';

describe('delete user use case unit tests', () => {
  it('Should be able to delete a user', () => {
    const repository = new InMemoryUserRepository();

    const newUserData = {
      userName: 'testValue',
      userEmail: 'testValue',
      userPassword: 'testValue',
      userLogin: 'testValue',
    };

    const createUseCase = new RegisterUserUseCase(repository);
    createUseCase.execute(newUserData);

    expect(repository.users[0]).toBeDefined();

    const deleteUserUseCase = new DeleteUserUseCase(repository);

    deleteUserUseCase.execute(repository.users[0].id);

    console.log(repository.users)
    expect(repository.users[0]).toBeFalsy();
  });
});
