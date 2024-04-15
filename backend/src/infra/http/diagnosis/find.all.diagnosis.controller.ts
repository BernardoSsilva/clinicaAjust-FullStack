import { FindAllDiagnosisUseCase } from "./../../../App/useCases/diagnosis/find.all.diagnosis.use.case";
import { Controller, Get } from "@nestjs/common";

@Controller("diagnosis/find/all")
export class FindAllDiagnosis {
  constructor(private findAllDiagnosisUseCase: FindAllDiagnosisUseCase) {}

  @Get()
  async FindAll() {
    await this.findAllDiagnosisUseCase.execute();
  }
}
