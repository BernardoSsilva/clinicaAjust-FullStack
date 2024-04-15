import { DeleteDiagnosisUseCase } from "./../../../App/useCases/diagnosis/delete.diagnosis.use.case";
import { Controller, Delete, Param } from "@nestjs/common";

@Controller("/diagnosis/delete")
export class DeleteDiagnosisController {
  constructor(private deleteDiagnosisUseCase: DeleteDiagnosisUseCase) {}

  @Delete("/:id")
  async deleteDiagnosis(@Param("id") id: string) {
    await this.deleteDiagnosisUseCase.execute(id);
  }
}
