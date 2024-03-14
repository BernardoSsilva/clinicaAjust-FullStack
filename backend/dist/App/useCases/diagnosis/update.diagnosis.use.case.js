"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiagnosisUseCase = void 0;
class UpdateDiagnosisUseCase {
    constructor(diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }
    async execute(id, updateDiagnosisDto) {
        await this.diagnosisRepository.update(id, updateDiagnosisDto);
    }
}
exports.UpdateDiagnosisUseCase = UpdateDiagnosisUseCase;
//# sourceMappingURL=update.diagnosis.use.case.js.map