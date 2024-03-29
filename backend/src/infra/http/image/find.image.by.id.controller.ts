import { FindImageByIdUseCase } from './../../../App/useCases/images/find.image.by.id.use.case';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/image')
export class FindImageByIdController {
  constructor(private findImageByIdUseCase: FindImageByIdUseCase) {}

  @Get(':id')
  async execute(@Param('id') id: string) {
    await this.findImageByIdUseCase.execute(id);
  }
}
