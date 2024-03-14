import { UserRepository } from 'src/App/repositories/user.repository';
import { UserEntity } from './../../entites/user.entity';


export class RegisterUserUseCase{

    constructor(private userRepository:UserRepository){}
    async execute(userData: UserEntity){
        this.userRepository.insert(userData)
    }
}