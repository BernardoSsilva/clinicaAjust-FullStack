import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';
export declare class DeleteDiagnosisUseCase {
    private diagnosisRepository;
    constructor(diagnosisRepository: DiagnosisRepository);
    execute(diagnosisId: string): Promise<void>;
}
