"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const entity_1 = require("../../shared/entity");
class UserEntity extends entity_1.Entity {
    set userName(value) {
        this.userName = value;
    }
    get userName() {
        return this.userName;
    }
    set userEmail(value) {
        this.userEmail = value;
    }
    get userEmail() {
        return this.userEmail;
    }
    set userPassword(value) {
        this.userPassword = value;
    }
    get userPassword() {
        return this.userPassword;
    }
    set userLogin(value) {
        this.userLogin = value;
    }
    get userLogin() {
        return this.userLogin;
    }
    get createdAt() {
        return this.createdAt;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map