import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdUseCase } from '../../../App/useCases/users/find.user.by.id.use.case';

@Controller('user/find')
export class FindUniqueUserController {
  constructor(private getUniqueUserUseCase: FindUserByIdUseCase) {}

  @Get(':id')
  async execute(@Param('id') id: string) {
    return await this.getUniqueUserUseCase.execute(id);
  }
}
