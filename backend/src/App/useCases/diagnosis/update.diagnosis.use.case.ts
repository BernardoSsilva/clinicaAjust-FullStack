import { DiagnosisRepository } from 'src/App/repositories/diagnosis.repository';
import { UpdateDiagnosisDto } from 'src/shared/dtos/diagnosis/updateDiagnosisDto';

export class UpdateDiagnosisUseCase {
  constructor(private diagnosisRepository: DiagnosisRepository) {}
  async execute(id: string, updateDiagnosisDto: UpdateDiagnosisDto) {
    await this.diagnosisRepository.update(id, updateDiagnosisDto);
  }
}
