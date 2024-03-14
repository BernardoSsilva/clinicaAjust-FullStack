import { ImageEntity } from 'src/App/entites/image.entity';
import { ImageRepository } from 'src/App/repositories/image.repository';

export class FindImageByIdUseCase {
  constructor(private imageRepository: ImageRepository) {}

  async execute(imageId: string): Promise<ImageEntity> {
    return await this.imageRepository.findById(imageId);
  }
}
