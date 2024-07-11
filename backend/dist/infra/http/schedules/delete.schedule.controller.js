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
exports.DeleteScheduleController = void 0;
const common_1 = require("@nestjs/common");
const delete_schedule_use_case_1 = require("../../../App/useCases/schedules/delete.schedule.use.case");
let DeleteScheduleController = class DeleteScheduleController {
    constructor(deleteScheduleUseCase) {
        this.deleteScheduleUseCase = deleteScheduleUseCase;
    }
    async execute(id) {
        return await this.deleteScheduleUseCase.execute(id);
    }
};
exports.DeleteScheduleController = DeleteScheduleController;
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeleteScheduleController.prototype, "execute", null);
exports.DeleteScheduleController = DeleteScheduleController = __decorate([
    (0, common_1.Controller)('schedule/delete'),
    __metadata("design:paramtypes", [delete_schedule_use_case_1.DeleteScheduleUseCase])
], DeleteScheduleController);
//# sourceMappingURL=delete.schedule.controller.js.map