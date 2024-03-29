import { Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserUseCase } from '../../../App/useCases/users/update.user.use.case';
import { UpdateUserDto } from '../../../shared/dtos/user/updateUserDto';

@Controller('user/update')
export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  @Patch(':id')
  async execute(@Param('id') id: string, updateUserData: UpdateUserDto) {
    return await this.updateUserUseCase.execute(id, updateUserData);
  }
}
