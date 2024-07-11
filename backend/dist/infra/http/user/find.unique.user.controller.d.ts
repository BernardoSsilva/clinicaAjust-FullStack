import { FindUserByIdUseCase } from '../../../App/useCases/users/find.user.by.id.use.case';
export declare class FindUniqueUserController {
    private getUniqueUserUseCase;
    constructor(getUniqueUserUseCase: FindUserByIdUseCase);
    execute(id: string): Promise<import("src/App/entites/user.entity").UserEntity>;
}
