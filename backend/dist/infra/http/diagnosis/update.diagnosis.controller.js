"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiagnosisController = void 0;
const updateDiagnosisDto_1 = require("../../../shared/dtos/diagnosis/updateDiagnosisDto");
const update_diagnosis_use_case_1 = require("./../../../App/useCases/diagnosis/update.diagnosis.use.case");
const common_1 = require("@nestjs/common");
let UpdateDiagnosisController = class UpdateDiagnosisController {
    constructor(updateDiagnosisUseCase) {
        this.updateDiagnosisUseCase = updateDiagnosisUseCase;
    }
    async editDiagnosis(id, data) {
        await this.updateDiagnosisUseCase.execute(id, data);
    }
};
exports.UpdateDiagnosisController = UpdateDiagnosisController;
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateDiagnosisDto_1.UpdateDiagnosisDto]),
    __metadata("design:returntype", Promise)
], UpdateDiagnosisController.prototype, "editDiagnosis", null);
exports.UpdateDiagnosisController = UpdateDiagnosisController = __decorate([
    (0, common_1.Controller)("/diagnosis/edit"),
    __metadata("design:paramtypes", [update_diagnosis_use_case_1.UpdateDiagnosisUseCase])
], UpdateDiagnosisController);
//# sourceMappingURL=update.diagnosis.controller.js.map