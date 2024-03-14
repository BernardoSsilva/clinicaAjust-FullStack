import { DiagnosisEntity } from 'src/App/entites/diagnosi.entity';
import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';

export class FindDiagnosisByIdUseCase {
  constructor(private diagnosisRepository: DiagnosisRepository) {}

  async execute(id: string): Promise<DiagnosisEntity> {
    return await this.diagnosisRepository.findById(id);
  }
}
