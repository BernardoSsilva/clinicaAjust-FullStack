import { FindAllImagesUseCase } from './../../../App/useCases/images/find.all.images.use.case';
import { Controller, Get } from '@nestjs/common';

@Controller('images/all')
export class GetAllImagesController {
  constructor(private findAllImagesUseCase: FindAllImagesUseCase) {}

  @Get()
  async execute() {
    return await this.findAllImagesUseCase.execute();
  }
}
