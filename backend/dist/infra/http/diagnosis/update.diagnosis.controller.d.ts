import { UpdateDiagnosisDto } from "../../../shared/dtos/diagnosis/updateDiagnosisDto";
import { UpdateDiagnosisUseCase } from "./../../../App/useCases/diagnosis/update.diagnosis.use.case";
export declare class UpdateDiagnosisController {
    private updateDiagnosisUseCase;
    constructor(updateDiagnosisUseCase: UpdateDiagnosisUseCase);
    editDiagnosis(id: string, data: UpdateDiagnosisDto): Promise<void>;
}
