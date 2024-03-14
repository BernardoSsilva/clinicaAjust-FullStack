import { DiagnosisRepository } from "src/App/repositories/diagnosis.repository";
import { CreateDiagnosisDto } from "src/shared/dtos/diagnosis/createDiagnosisDto";
export declare class CreateDiagnosisUseCase {
    private diagnosisRepository;
    constructor(diagnosisRepository: DiagnosisRepository);
    execute(createDiagnosisDto: CreateDiagnosisDto): Promise<void>;
}
