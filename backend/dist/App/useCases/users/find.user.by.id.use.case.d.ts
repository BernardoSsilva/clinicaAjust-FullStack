import { UserEntity } from "src/App/entites/user.entity";
import { UserRepository } from "src/App/repositories/user.repository";
export declare class FindUserByIdUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: string): Promise<UserEntity>;
}
