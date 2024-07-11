/// <reference types="multer" />
import { CreateImageUseCase } from '../../../App/useCases/images/create.image.use.case';
export declare class CreateImageController {
    private createImageUseCase;
    constructor(createImageUseCase: CreateImageUseCase);
    execute(file: Express.Multer.File, id: string): Promise<void>;
}
