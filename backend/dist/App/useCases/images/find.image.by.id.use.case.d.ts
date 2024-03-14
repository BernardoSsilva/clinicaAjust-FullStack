import { ImageEntity } from 'src/App/entites/image.entity';
import { ImageRepository } from 'src/App/repositories/image.repository';
export declare class FindImageByIdUseCase {
    private imageRepository;
    constructor(imageRepository: ImageRepository);
    execute(imageId: string): Promise<ImageEntity>;
}
