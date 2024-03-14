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
        const userNameErrors = this.validateName(this.props.userName);
        const userEmailErrors = this.validateEmail(this.props.userEmail);
        const userPasswordErrors = this.validatePassword(this.props.userPassword);
        const userLoginErrors = this.validateLogin(this.props.userLogin);
        if (userNameErrors)
            errors.push(userNameErrors);
        if (userEmailErrors)
            errors.push(userEmailErrors);
        if (userPasswordErrors)
            errors.push(userPasswordErrors);
        if (userLoginErrors)
            errors.push(userLoginErrors);
        return errors;
    }
    validateName(userName) {
        if (!userName)
            return 'O nome é requirido';
        if (typeof userName !== 'string')
            return 'O nome deve ser formado por caracteres';
        if (userName.length < 2)
            return 'O nome é invalido';
        return null;
    }
    validateLogin(userLogin) {
        if (!userLogin)
            return 'O login é requirido';
        if (typeof userLogin !== 'string')
            return 'O login deve ser formado por caracteres';
        if (userLogin.length < 2)
            return 'O login é invalido';
        return null;
    }
    validateEmail(userEmail) {
        if (!userEmail)
            return 'O email é requirido';
        if (typeof userEmail !== 'string')
            return 'O email deve ser formado por caracteres';
        if (userEmail.length < 2)
            return 'O email é invalido';
        return null;
    }
    validatePassword(userPassword) {
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