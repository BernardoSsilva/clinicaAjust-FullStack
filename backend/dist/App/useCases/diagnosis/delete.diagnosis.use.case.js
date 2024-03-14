"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDiagnosisUseCase = void 0;
class DeleteDiagnosisUseCase {
    constructor(diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }
    async execute(diagnosisId) {
        await this.diagnosisRepository.delete(diagnosisId);
    }
}
exports.DeleteDiagnosisUseCase = DeleteDiagnosisUseCase;
//# sourceMappingURL=delete.diagnosis.use.case.js.map