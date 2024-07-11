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
exports.GetAllSchedulesController = void 0;
const get_all_schedules_use_case_1 = require("./../../../App/useCases/schedules/get.all.schedules.use.case");
const common_1 = require("@nestjs/common");
let GetAllSchedulesController = class GetAllSchedulesController {
    constructor(getAllSchedulesUseCase) {
        this.getAllSchedulesUseCase = getAllSchedulesUseCase;
    }
    async execute() {
        return await this.getAllSchedulesUseCase.execute();
    }
};
exports.GetAllSchedulesController = GetAllSchedulesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GetAllSchedulesController.prototype, "execute", null);
exports.GetAllSchedulesController = GetAllSchedulesController = __decorate([
    (0, common_1.Controller)('schedule/all'),
    __metadata("design:paramtypes", [get_all_schedules_use_case_1.GetAllSchedulesUseCase])
], GetAllSchedulesController);
//# sourceMappingURL=get.all.schedules.controller.js.map