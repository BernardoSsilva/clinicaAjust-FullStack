import { DeleteDiagnosisUseCase } from "./../../../App/useCases/diagnosis/delete.diagnosis.use.case";
export declare class DeleteDiagnosisController {
    private deleteDiagnosisUseCase;
    constructor(deleteDiagnosisUseCase: DeleteDiagnosisUseCase);
    deleteDiagnosis(id: string): Promise<void>;
}
