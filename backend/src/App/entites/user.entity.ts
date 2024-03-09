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

  async validate() {}

  async validateName(userName) {
    if (!userName) return 'O nome é requirido';
    if (typeof userName !== 'string')
      return 'O nome deve ser formado por caracteres';
    return null;
  }

  async validateLogin(userLogin) {
    if (!userLogin) return 'O login é requirido';
    if (typeof userLogin !== 'string')
      return 'O login deve ser formado por caracteres';
    return null;
  }

  async validateEmail(userEmail) {
    if (!userEmail) return 'O email é requirido';
    if (typeof userEmail !== 'string')
      return 'O email deve ser formado por caracteres';
    return null;
  }

  async validatePassword(userPassword) {
    if (!userPassword) return 'A senha é requirida';
    if (typeof userPassword !== 'string')
      return 'A senha deve ser formada por caracteres';
    if (userPassword.length < 8)
      return 'A senha deve ter no mínimo 8 caracteres';
    return null;
  }
}
