import { Body, Controller, Get } from '@nestjs/common';
import { FindUserByEmailUseCase } from '../../../App/useCases/users/find.user.by.email.use-case';

@Controller('user/email')
export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

  @Get()
  async execute(@Body() email: string) {
    return await this.findUserByEmailUseCase.execute(email);
  }
}
