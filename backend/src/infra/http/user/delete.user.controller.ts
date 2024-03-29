import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserUseCase } from '../../../App/useCases/users/delete.user.use.case';

@Controller('user/delete/')
export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  @Delete(':id')
  async execute(@Param('id') id: string) {
    return await this.deleteUserUseCase.execute(id);
  }
}
