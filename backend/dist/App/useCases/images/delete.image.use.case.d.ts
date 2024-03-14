import { ImageRepository } from 'src/App/repositories/image.repository';
export declare class DeleteImageUseCase {
    private imageRepository;
    constructor(imageRepository: ImageRepository);
    execute(imageId: string): Promise<void>;
}
