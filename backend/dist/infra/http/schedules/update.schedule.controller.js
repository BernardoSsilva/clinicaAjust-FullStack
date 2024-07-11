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
exports.UpdateScheduleController = void 0;
const common_1 = require("@nestjs/common");
const update_schedule_use_case_1 = require("../../../App/useCases/schedules/update.schedule.use.case");
const updateScheduleDto_1 = require("../../../shared/dtos/schedules/updateScheduleDto");
let UpdateScheduleController = class UpdateScheduleController {
    constructor(updateScheduleUseCase) {
        this.updateScheduleUseCase = updateScheduleUseCase;
    }
    async execute(id, updateData) {
        return await this.updateScheduleUseCase.execute(id, updateData);
    }
};
exports.UpdateScheduleController = UpdateScheduleController;
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateScheduleDto_1.UpdateScheduleDto]),
    __metadata("design:returntype", Promise)
], UpdateScheduleController.prototype, "execute", null);
exports.UpdateScheduleController = UpdateScheduleController = __decorate([
    (0, common_1.Controller)('schedule/update'),
    __metadata("design:paramtypes", [update_schedule_use_case_1.UpdateScheduleUseCase])
], UpdateScheduleController);
//# sourceMappingURL=update.schedule.controller.js.map