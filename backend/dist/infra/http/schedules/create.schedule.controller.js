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
exports.CreateScheduleController = void 0;
const common_1 = require("@nestjs/common");
const create_schedule_use_case_1 = require("../../../App/useCases/schedules/create.schedule.use.case");
const createScheduleDto_1 = require("../../../shared/dtos/schedules/createScheduleDto");
let CreateScheduleController = class CreateScheduleController {
    constructor(createScheduleUseCase) {
        this.createScheduleUseCase = createScheduleUseCase;
    }
    async execute(scheduleData) {
        await this.createScheduleUseCase.execute(scheduleData);
    }
};
exports.CreateScheduleController = CreateScheduleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createScheduleDto_1.CreateScheduleDTO]),
    __metadata("design:returntype", Promise)
], CreateScheduleController.prototype, "execute", null);
exports.CreateScheduleController = CreateScheduleController = __decorate([
    (0, common_1.Controller)("schedule/create"),
    __metadata("design:paramtypes", [create_schedule_use_case_1.CreateScheduleUseCase])
], CreateScheduleController);
//# sourceMappingURL=create.schedule.controller.js.map