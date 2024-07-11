import { FindUserByEmailUseCase } from '../../../App/useCases/users/find.user.by.email.use-case';
export declare class FindUserByEmailController {
    private findUserByEmailUseCase;
    constructor(findUserByEmailUseCase: FindUserByEmailUseCase);
    execute(email: string): Promise<import("src/App/entites/user.entity").UserEntity>;
}
