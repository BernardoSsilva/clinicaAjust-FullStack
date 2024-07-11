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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDiagnosisController = void 0;
const common_1 = require("@nestjs/common");
const create_diagnosis_use_case_1 = require("../../../App/useCases/diagnosis/create.diagnosis.use.case");
const createDiagnosisDto_1 = require("../../../shared/dtos/diagnosis/createDiagnosisDto");
let CreateDiagnosisController = class CreateDiagnosisController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async createDiagnosis(data) {
        await this.useCase.execute(data);
    }
};
exports.CreateDiagnosisController = CreateDiagnosisController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDiagnosisDto_1.CreateDiagnosisDto]),
    __metadata("design:returntype", Promise)
], CreateDiagnosisController.prototype, "createDiagnosis", null);
exports.CreateDiagnosisController = CreateDiagnosisController = __decorate([
    (0, common_1.Controller)("diagnosis/create"),
    __metadata("design:paramtypes", [create_diagnosis_use_case_1.CreateDiagnosisUseCase])
], CreateDiagnosisController);
//# sourceMappingURL=create.diagnosis.controller.js.map