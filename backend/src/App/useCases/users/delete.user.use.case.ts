import { UserRepository } from 'src/App/repositories/user.repository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    await this.userRepository.delete(userId);
  }
}
