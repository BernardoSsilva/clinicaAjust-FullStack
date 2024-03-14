import { UserEntity } from "src/App/entites/user.entity";
import { UserRepository } from "src/App/repositories/user.repository";

export class FindUserByIdUseCase{
    constructor (private userRepository:UserRepository){}

    async execute(userId:string):Promise<UserEntity>{
        return await this.userRepository.findById(userId)
    }
}