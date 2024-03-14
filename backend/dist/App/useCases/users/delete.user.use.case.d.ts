import { UserRepository } from 'src/App/repositories/user.repository';
export declare class DeleteUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: string): Promise<void>;
}
