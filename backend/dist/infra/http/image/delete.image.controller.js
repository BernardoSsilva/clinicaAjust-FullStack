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
exports.DeleteImageController = void 0;
const delete_image_use_case_1 = require("./../../../App/useCases/images/delete.image.use.case");
const common_1 = require("@nestjs/common");
let DeleteImageController = class DeleteImageController {
    constructor(deleteImageUseCase) {
        this.deleteImageUseCase = deleteImageUseCase;
    }
    async execute(id) {
        await this.deleteImageUseCase.execute(id);
    }
};
exports.DeleteImageController = DeleteImageController;
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeleteImageController.prototype, "execute", null);
exports.DeleteImageController = DeleteImageController = __decorate([
    (0, common_1.Controller)('image/delete'),
    __metadata("design:paramtypes", [delete_image_use_case_1.DeleteImageUseCase])
], DeleteImageController);
//# sourceMappingURL=delete.image.controller.js.map