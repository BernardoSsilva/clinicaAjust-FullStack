"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindDiagnosisByIdUseCase = void 0;
class FindDiagnosisByIdUseCase {
    constructor(diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }
    async execute(id) {
        return await this.diagnosisRepository.findById(id);
    }
}
exports.FindDiagnosisByIdUseCase = FindDiagnosisByIdUseCase;
//# sourceMappingURL=find.diagnosis.by.id.use.case.js.map