import { DiagnosisEntity } from '../../src/App/entites/diagnosi.entity';
import { DiagnosisRepository } from '../../src/App/repositories/diagnosis.repository';

export class InMemoryDiagnosisRepository implements DiagnosisRepository {
  public diagnosis: DiagnosisEntity[] = [];
  async getAll(): Promise<DiagnosisEntity[]> {
    return await this.diagnosis;
  }
  async update(id: string, values: any): Promise<void> {
    const updatedDiagnosisIndex = this.diagnosis.findIndex(
      (diagnosis) => diagnosis.id == id,
    );
    this.diagnosis[updatedDiagnosisIndex] = values;
  }
  async findById(id: string): Promise<DiagnosisEntity> {
    return await this.diagnosis.find((diagnosis) => diagnosis.id == id);
  }
  async insert(values: any): Promise<void> {
    await this.diagnosis.push(values);
  }
  async delete(id: string): Promise<void> {
    const deletedDiagnosisIndex = this.diagnosis.findIndex(
      (diagnosis) => diagnosis.id == id,
    );
    this.diagnosis.splice(deletedDiagnosisIndex, 1);
  }
}
