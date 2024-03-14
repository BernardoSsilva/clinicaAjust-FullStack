import { UserRepository } from 'src/App/repositories/user.repository';
import { UserEntity } from './../../entites/user.entity';
export declare class RegisterUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userData: UserEntity): Promise<void>;
}
