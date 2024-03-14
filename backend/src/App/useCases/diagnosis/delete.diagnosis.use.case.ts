import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';

export class DeleteDiagnosisUseCase {
  constructor(private diagnosisRepository: DiagnosisRepository) {}

  async execute(diagnosisId: string) {
    await this.diagnosisRepository.delete(diagnosisId);
  }
}
