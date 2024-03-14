import { DiagnosisEntity } from '../entites/diagnosi.entity';
export declare abstract class DiagnosisRepository {
    abstract getAll(): Promise<DiagnosisEntity[]>;
    abstract update(id: string, values: any): Promise<void>;
    abstract findById(id: string): Promise<DiagnosisEntity>;
    abstract insert(values: any): Promise<void>;
    abstract delete(id: string): Promise<void>;
}
