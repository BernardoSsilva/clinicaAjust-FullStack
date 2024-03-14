import { UserEntity } from 'src/App/entites/user.entity';
import { UserRepository } from 'src/App/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  users: UserEntity[] = [];

  async getAll(): Promise<UserEntity[]> {
    return await this.users;
  }
  async findById(id: string): Promise<UserEntity> {
    return await this.users.find((user) => user.id == id);
  }
  async insert(values: any): Promise<void> {
    await this.users.push(values);
  }
  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id == id);
    await this.users.splice(userIndex, 1);
  }
  async update(id: string, values: any): Promise<void> {
    const editedUser = await this.users.findIndex((user) => user.id == id);
    this.users[editedUser] = values;
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return await this.users.find((user) => user.props.userEmail == email);
  }
}
