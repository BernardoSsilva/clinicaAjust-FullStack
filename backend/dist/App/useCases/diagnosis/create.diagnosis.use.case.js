"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDiagnosisUseCase = void 0;
class CreateDiagnosisUseCase {
    constructor(diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }
    async execute(createDiagnosisDto) {
        await this.diagnosisRepository.insert(createDiagnosisDto);
    }
}
exports.CreateDiagnosisUseCase = CreateDiagnosisUseCase;
//# sourceMappingURL=create.diagnosis.use.case.js.map