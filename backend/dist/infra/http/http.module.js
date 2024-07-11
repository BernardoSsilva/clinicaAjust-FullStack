"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const update_user_controller_1 = require("./user/update.user.controller");
const delete_user_controller_1 = require("./user/delete.user.controller");
const find_all_user_controller_1 = require("./user/find.all.user.controller");
const find_unique_user_controller_1 = require("./user/find.unique.user.controller");
const find_user_by_email_controller_1 = require("./user/find.user.by.email.controller");
const create_schedule_controller_1 = require("./schedules/create.schedule.controller");
const delete_schedule_controller_1 = require("./schedules/delete.schedule.controller");
const find_schedule_by_id_controller_1 = require("./schedules/find.schedule.by.id.controller");
const get_all_schedules_controller_1 = require("./schedules/get.all.schedules.controller");
const update_schedule_controller_1 = require("./schedules/update.schedule.controller");
const create_user_controller_1 = require("./user/create.user.controller");
let HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule;
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            update_user_controller_1.UpdateUserController,
            find_user_by_email_controller_1.FindUserByEmailController,
            find_unique_user_controller_1.FindUniqueUserController,
            find_all_user_controller_1.FindAllUsersController,
            delete_user_controller_1.DeleteUserController,
            create_user_controller_1.CreateUserController,
            update_schedule_controller_1.UpdateScheduleController,
            get_all_schedules_controller_1.GetAllSchedulesController,
            find_schedule_by_id_controller_1.FindScheduleByIdController,
            delete_schedule_controller_1.DeleteScheduleController,
            create_schedule_controller_1.CreateScheduleController,
        ],
        providers: [],
        exports: [],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map