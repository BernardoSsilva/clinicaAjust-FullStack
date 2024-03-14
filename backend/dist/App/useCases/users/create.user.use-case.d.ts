import { UserRepository } from 'src/App/repositories/user.repository';
import { CreateUserDto } from 'src/shared/dtos/user/createUserDto';
export declare class RegisterUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userData: CreateUserDto): Promise<void>;
}
