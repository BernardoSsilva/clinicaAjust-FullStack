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

  get createdAt():Date {
    return this.props.createdAt;
  }
}
