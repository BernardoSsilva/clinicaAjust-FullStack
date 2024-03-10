"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const entity_1 = require("../../shared/entity");
class UserEntity extends entity_1.Entity {
    set userName(value) {
        this.userName = value;
    }
    get userName() {
        return this.props.userName;
    }
    set userEmail(value) {
        this.userEmail = value;
    }
    get userEmail() {
        return this.props.userEmail;
    }
    set userPassword(value) {
        this.userPassword = value;
    }
    get userPassword() {
        return this.props.userPassword;
    }
    set userLogin(value) {
        this.userLogin = value;
    }
    get userLogin() {
        return this.props.userLogin;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    constructor(props) {
        super(props);
        this.validate();
    }
    async validate() {
        const errors = [];
        const userNameErrors = await this.validateName(this.props.userName);
        return errors;
    }
    async validateName(userName) {
        if (!userName)
            return 'O nome é requirido';
        if (typeof userName !== 'string')
            return 'O nome deve ser formado por caracteres';
        return null;
    }
    async validateLogin(userLogin) {
        if (!userLogin)
            return 'O login é requirido';
        if (typeof userLogin !== 'string')
            return 'O login deve ser formado por caracteres';
        return null;
    }
    async validateEmail(userEmail) {
        if (!userEmail)
            return 'O email é requirido';
        if (typeof userEmail !== 'string')
            return 'O email deve ser formado por caracteres';
        return null;
    }
    async validatePassword(userPassword) {
        if (!userPassword)
            return 'A senha é requirida';
        if (typeof userPassword !== 'string')
            return 'A senha deve ser formada por caracteres';
        if (userPassword.length < 8)
            return 'A senha deve ter no mínimo 8 caracteres';
        return null;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map