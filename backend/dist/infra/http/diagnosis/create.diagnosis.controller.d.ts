import { CreateDiagnosisUseCase } from "../../../App/useCases/diagnosis/create.diagnosis.use.case";
import { CreateDiagnosisDto } from "../../../shared/dtos/diagnosis/createDiagnosisDto";
export declare class CreateDiagnosisController {
    private useCase;
    constructor(useCase: CreateDiagnosisUseCase);
    createDiagnosis(data: CreateDiagnosisDto): Promise<void>;
}
