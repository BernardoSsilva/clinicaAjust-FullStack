import { UpdateDiagnosisDto } from "../../../shared/dtos/diagnosis/updateDiagnosisDto";
import { UpdateDiagnosisUseCase } from "./../../../App/useCases/diagnosis/update.diagnosis.use.case";
import { Controller, Param, Patch } from "@nestjs/common";

@Controller("/diagnosis/edit")
export class UpdateDiagnosisController {
  constructor(private updateDiagnosisUseCase: UpdateDiagnosisUseCase) {}

  @Patch("/:id")
  async editDiagnosis(@Param("id") id: string, data: UpdateDiagnosisDto) {
    await this.updateDiagnosisUseCase.execute(id, data);
  }
}
