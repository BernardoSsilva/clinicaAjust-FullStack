import { DiagnosisEntity } from "src/App/entites/diagnosi.entity";
import { DiagnosisRepository } from "src/App/repositories/diagnosis.repository";

export class FindAllDiagnosisUseCase{
    constructor(private diagnosisRepository:DiagnosisRepository){}
    
    async execute():Promise<DiagnosisEntity[]>{
        return await this.diagnosisRepository.getAll()
    }
}