import { FindAllUsersUseCase } from "../../../App/useCases/users/find.all.users.use.case";
export declare class FindAllUsersController {
    private findAllUsersUseCase;
    constructor(findAllUsersUseCase: FindAllUsersUseCase);
    execute(): Promise<import("src/App/entites/user.entity").UserEntity[]>;
}
