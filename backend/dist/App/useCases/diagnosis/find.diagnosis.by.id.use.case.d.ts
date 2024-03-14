import { DiagnosisEntity } from 'src/App/entites/diagnosi.entity';
import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';
export declare class FindDiagnosisByIdUseCase {
    private diagnosisRepository;
    constructor(diagnosisRepository: DiagnosisRepository);
    execute(id: string): Promise<DiagnosisEntity>;
}
