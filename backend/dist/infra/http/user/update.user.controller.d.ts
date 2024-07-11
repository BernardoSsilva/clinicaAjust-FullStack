import { UpdateUserUseCase } from '../../../App/useCases/users/update.user.use.case';
import { UpdateUserDto } from '../../../shared/dtos/user/updateUserDto';
export declare class UpdateUserController {
    private updateUserUseCase;
    constructor(updateUserUseCase: UpdateUserUseCase);
    execute(id: string, updateUserData: UpdateUserDto): Promise<void>;
}
