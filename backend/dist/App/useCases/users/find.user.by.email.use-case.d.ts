import { UserEntity } from "src/App/entites/user.entity";
import { UserRepository } from "src/App/repositories/user.repository";
export declare class FindUserByEmailUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(userEmail: string): Promise<UserEntity>;
}
