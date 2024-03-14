import { UserEntity } from "src/App/entites/user.entity";
import { UserRepository } from "src/App/repositories/user.repository";


export class FindUserByEmailUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userEmail:string):Promise<UserEntity>{
        return await this.userRepository.findByEmail(userEmail);
    }
}