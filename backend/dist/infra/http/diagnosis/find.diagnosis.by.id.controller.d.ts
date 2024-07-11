import { FindDiagnosisByIdUseCase } from "./../../../App/useCases/diagnosis/find.diagnosis.by.id.use.case";
export declare class FindDiagnosisById {
    private findDiagnosisByIdUseCase;
    constructor(findDiagnosisByIdUseCase: FindDiagnosisByIdUseCase);
    findById(id: string): Promise<void>;
}
