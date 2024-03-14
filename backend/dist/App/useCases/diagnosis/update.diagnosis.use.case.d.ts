import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';
import { UpdateDiagnosisDto } from 'src/shared/dtos/diagnosis/updateDiagnosisDto';
export declare class UpdateDiagnosisUseCase {
    private diagnosisRepository;
    constructor(diagnosisRepository: DiagnosisRepository);
    execute(id: string, updateDiagnosisDto: UpdateDiagnosisDto): Promise<void>;
}
