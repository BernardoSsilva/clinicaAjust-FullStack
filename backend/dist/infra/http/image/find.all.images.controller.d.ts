import { FindAllImagesUseCase } from './../../../App/useCases/images/find.all.images.use.case';
export declare class GetAllImagesController {
    private findAllImagesUseCase;
    constructor(findAllImagesUseCase: FindAllImagesUseCase);
    execute(): Promise<import("src/App/entites/image.entity").ImageEntity[]>;
}
