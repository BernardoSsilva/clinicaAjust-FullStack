import { UserRepository } from 'src/App/repositories/user.repository';
import { CreateUserDto } from 'src/shared/dtos/user/createUserDto';

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(userData: CreateUserDto) {
    this.userRepository.insert(userData);
  }
}
