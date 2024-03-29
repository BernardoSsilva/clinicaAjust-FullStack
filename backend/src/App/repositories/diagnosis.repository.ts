import { DiagnosisEntity } from '../entites/diagnosi.entity';

export abstract class DiagnosisRepository {
  abstract getAll(): Promise<DiagnosisEntity[]>;
  abstract update(id: string, values): Promise<void>;
  abstract findById(id: string): Promise<DiagnosisEntity>;
  abstract insert(values): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
