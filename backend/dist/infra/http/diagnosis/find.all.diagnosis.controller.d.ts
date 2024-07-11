import { FindAllDiagnosisUseCase } from "./../../../App/useCases/diagnosis/find.all.diagnosis.use.case";
export declare class FindAllDiagnosis {
    private findAllDiagnosisUseCase;
    constructor(findAllDiagnosisUseCase: FindAllDiagnosisUseCase);
    FindAll(): Promise<void>;
}
