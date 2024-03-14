import { UserRepository } from 'src/App/repositories/user.repository';
import { UpdateUserDto } from 'src/shared/dtos/user/updateUserDto';
export declare class UpdateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: string, updateUserDto: UpdateUserDto): Promise<void>;
}
