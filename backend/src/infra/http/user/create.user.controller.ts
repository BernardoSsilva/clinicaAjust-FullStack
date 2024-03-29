import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from '../../../App/useCases/users/create.user.use-case';
import { CreateUserDto } from '../../../shared/dtos/user/createUserDto';

@Controller('user/register')
export class CreateUserController {
  constructor(private createUserUseCase: RegisterUserUseCase) {}

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return await this.createUserUseCase.execute(userData);
  }
}
