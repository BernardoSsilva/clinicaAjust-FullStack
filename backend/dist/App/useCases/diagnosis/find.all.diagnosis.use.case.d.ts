import { DiagnosisEntity } from "src/App/entites/diagnosi.entity";
import { DiagnosisRepository } from "src/App/repositories/diagnosis.repository";
export declare class FindAllDiagnosisUseCase {
    private diagnosisRepository;
    constructor(diagnosisRepository: DiagnosisRepository);
    execute(): Promise<DiagnosisEntity[]>;
}
