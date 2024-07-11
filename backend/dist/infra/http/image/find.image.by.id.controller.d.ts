import { FindImageByIdUseCase } from './../../../App/useCases/images/find.image.by.id.use.case';
export declare class FindImageByIdController {
    private findImageByIdUseCase;
    constructor(findImageByIdUseCase: FindImageByIdUseCase);
    execute(id: string): Promise<void>;
}
