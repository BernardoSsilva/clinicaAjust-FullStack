import { UserEntity } from 'src/App/entites/user.entity';
import { UserRepository } from 'src/App/repositories/user.repository';

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.getAll();
  }
}
