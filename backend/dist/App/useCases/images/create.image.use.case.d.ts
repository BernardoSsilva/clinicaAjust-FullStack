import { ImageRepository } from 'src/App/repositories/image.repository';
import { CreateImageDto } from 'src/shared/dtos/images/createImageDto';
export declare class CreateImageUseCase {
    private imageRepository;
    constructor(imageRepository: ImageRepository);
    execute(createImageDate: CreateImageDto): Promise<void>;
}
