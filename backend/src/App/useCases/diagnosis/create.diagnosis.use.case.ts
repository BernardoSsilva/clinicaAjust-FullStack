import { DiagnosisRepository } from "src/App/repositories/diagnosis.repository";
import { CreateDiagnosisDto } from "src/shared/dtos/diagnosis/createDiagnosisDto";


export class CreateDiagnosisUseCase{
    constructor(private diagnosisRepository:DiagnosisRepository){}


    async execute(createDiagnosisDto:CreateDiagnosisDto){
        await this.diagnosisRepository.insert(createDiagnosisDto)
    }
}