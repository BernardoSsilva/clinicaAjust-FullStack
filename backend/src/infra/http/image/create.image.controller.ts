import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { CreateImageUseCase } from '../../../App/useCases/images/create.image.use.case';

@Controller('/image/upload')
export class CreateImageController {
  constructor(private createImageUseCase: CreateImageUseCase) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  async execute(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    const data = {
      diagnosisId: id,
      stored: file.path + file.filename,
      imageName: file.originalname,
      sizeKb: file.size,
    };

    return await this.createImageUseCase.execute(data);
  }
}

MulterModule.register({
  dest: './upload',
});
