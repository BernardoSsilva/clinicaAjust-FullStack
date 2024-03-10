import { error } from 'console';
import { Entity } from '../../shared/entity';

type UserEntityProps = {
  userName: string;
  userEmail: string;
  userPassword: string;
  userLogin: string;
  createdAt: Date;
};

export class UserEntity extends Entity<UserEntityProps> {
  set userName(value: string) {
    this.userName = value;
  }

  get userName(): string {
    return this.props.userName;
  }

  set userEmail(value: string) {
    this.userEmail = value;
  }

  get userEmail(): string {
    return this.props.userEmail;
  }

  set userPassword(value: string) {
    this.userPassword = value;
  }

  get userPassword(): string {
    return this.props.userPassword;
  }

  set userLogin(value: string) {
    this.userLogin = value;
  }

  get userLogin(): string {
    return this.props.userLogin;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  constructor(props) {
    super(props);
    this.validate();
  }

  async validate(): Promise<string[]> {
    const errors: string[] = [];

    const userNameErrors = this.validateName(this.props.userName);
    const userEmailErrors = this.validateEmail(this.props.userEmail);
    const userPasswordErrors = this.validatePassword(this.props.userPassword);
    const userLoginErrors = this.validateLogin(this.props.userLogin);

    if (userNameErrors) errors.push(userNameErrors);
    if (userEmailErrors) errors.push(userEmailErrors);
    if (userPasswordErrors) errors.push(userPasswordErrors);
    if (userLoginErrors) errors.push(userLoginErrors);

    return errors;
  }

  validateName(userName: string): string | null {
    if (!userName) return 'O nome é requirido';
    if (typeof userName !== 'string')
      return 'O nome deve ser formado por caracteres';
    if (userName.length < 2) return 'O nome é invalido';
    return null;
  }

  validateLogin(userLogin: string): string | null {
    if (!userLogin) return 'O login é requirido';
    if (typeof userLogin !== 'string')
      return 'O login deve ser formado por caracteres';
    if (userLogin.length < 2) return 'O login é invalido';
    return null;
  }

  validateEmail(userEmail: string): string | null {
    if (!userEmail) return 'O email é requirido';
    if (typeof userEmail !== 'string')
      return 'O email deve ser formado por caracteres';
    if (userEmail.length < 2) return 'O email é invalido';
    return null;
  }

  validatePassword(userPassword: string): string | null {
    if (!userPassword) return 'A senha é requirida';
    if (typeof userPassword !== 'string')
      return 'A senha deve ser formada por caracteres';
    if (userPassword.length < 8)
      return 'A senha deve ter no mínimo 8 caracteres';
    return null;
  }
}
