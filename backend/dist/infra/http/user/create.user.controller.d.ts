import { RegisterUserUseCase } from '../../../App/useCases/users/create.user.use-case';
import { CreateUserDto } from '../../../shared/dtos/user/createUserDto';
export declare class CreateUserController {
    private createUserUseCase;
    constructor(createUserUseCase: RegisterUserUseCase);
    create(userData: CreateUserDto): Promise<void>;
}
