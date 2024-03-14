import { ImageRepository } from 'src/App/repositories/image.repository';

export class DeleteImageUseCase {
  constructor(private imageRepository: ImageRepository) {}

  async execute(imageId: string) {
    await this.imageRepository.delete(imageId);
  }
}
