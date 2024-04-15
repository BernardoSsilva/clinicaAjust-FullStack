import { Controller, Injectable, Post } from "@nestjs/common";
import { CreateDiagnosisUseCase } from "../../../App/useCases/diagnosis/create.diagnosis.use.case";
import { CreateDiagnosisDto } from "../../../shared/dtos/diagnosis/createDiagnosisDto";

@Controller("diagnosis/create")
export class CreateDiagnosisController {
  constructor(private useCase: CreateDiagnosisUseCase) {}

  @Post()
  async createDiagnosis(data: CreateDiagnosisDto) {
    await this.useCase.execute(data);
  }
}
