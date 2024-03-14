"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllDiagnosisUseCase = void 0;
class FindAllDiagnosisUseCase {
    constructor(diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }
    async execute() {
        return await this.diagnosisRepository.getAll();
    }
}
exports.FindAllDiagnosisUseCase = FindAllDiagnosisUseCase;
//# sourceMappingURL=find.all.diagnosis.use.case.js.map