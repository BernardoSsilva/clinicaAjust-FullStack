import { DeleteUserUseCase } from '../../../App/useCases/users/delete.user.use.case';
export declare class DeleteUserController {
    private deleteUserUseCase;
    constructor(deleteUserUseCase: DeleteUserUseCase);
    execute(id: string): Promise<void>;
}
