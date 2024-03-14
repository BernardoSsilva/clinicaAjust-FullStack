import { UserEntity } from 'src/App/entites/user.entity';
import { UserRepository } from 'src/App/repositories/user.repository';
export declare class FindAllUsersUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(): Promise<UserEntity[]>;
}
