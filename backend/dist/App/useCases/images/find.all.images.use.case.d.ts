import { ImageEntity } from "src/App/entites/image.entity";
import { ImageRepository } from "src/App/repositories/image.repository";
export declare class FindAllImagesUseCase {
    private imageRepository;
    constructor(imageRepository: ImageRepository);
    execute(): Promise<ImageEntity[]>;
}
