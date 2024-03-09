import { UserEntity } from '../user.entity';

describe('user entity unit tests', () => {
  it('should be able to create a new user entity', () => {
    const newEntity = new UserEntity('testID', {
      userName: 'nameTest',
      userEmail: 'testEmail',
      userPassword: 'testPassword',
      userLogin: 'testLogin',
      createdAt: new Date(),
    });

    expect(newEntity).toBeDefined();
    expect(newEntity.id).toBeDefined();
    expect(newEntity.createdAt).toBeInstanceOf(Date);
    expect(newEntity.userEmail).toEqual('testEmail');
    expect(newEntity.userName).toEqual('nameTest');
    expect(newEntity.userPassword).toEqual('testPassword');
  });
});
