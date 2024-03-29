import { Controller, Get } from "@nestjs/common";
import { FindAllUsersUseCase } from "../../../App/useCases/users/find.all.users.use.case";


@Controller("users/all")
export class FindAllUsersController{
    constructor(private findAllUsersUseCase:FindAllUsersUseCase ){}

    @Get()
    async execute(){
        return await this.findAllUsersUseCase.execute()
    }
}