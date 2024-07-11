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
exports.FindUserByEmailController = void 0;
const common_1 = require("@nestjs/common");
const find_user_by_email_use_case_1 = require("../../../App/useCases/users/find.user.by.email.use-case");
let FindUserByEmailController = class FindUserByEmailController {
    constructor(findUserByEmailUseCase) {
        this.findUserByEmailUseCase = findUserByEmailUseCase;
    }
    async execute(email) {
        return await this.findUserByEmailUseCase.execute(email);
    }
};
exports.FindUserByEmailController = FindUserByEmailController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FindUserByEmailController.prototype, "execute", null);
exports.FindUserByEmailController = FindUserByEmailController = __decorate([
    (0, common_1.Controller)('user/email'),
    __metadata("design:paramtypes", [find_user_by_email_use_case_1.FindUserByEmailUseCase])
], FindUserByEmailController);
//# sourceMappingURL=find.user.by.email.controller.js.map