import { UserRepository } from 'src/App/repositories/user.repository';
import { UpdateUserDto } from 'src/shared/dtos/user/updateUserDto';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(userId, updateUserDto);
  }
}
