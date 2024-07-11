import { DeleteImageUseCase } from './../../../App/useCases/images/delete.image.use.case';
export declare class DeleteImageController {
    private deleteImageUseCase;
    constructor(deleteImageUseCase: DeleteImageUseCase);
    execute(id: string): Promise<void>;
}
