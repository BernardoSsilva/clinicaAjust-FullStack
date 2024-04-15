import { FindDiagnosisByIdUseCase } from "./../../../App/useCases/diagnosis/find.diagnosis.by.id.use.case";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("/diagnosis")
export class FindDiagnosisById {
  constructor(private findDiagnosisByIdUseCase: FindDiagnosisByIdUseCase) {}

  @Get("/:id")
  async findById(@Param("id") id: string) {
    await this.findDiagnosisByIdUseCase.execute(id);
  }
}
