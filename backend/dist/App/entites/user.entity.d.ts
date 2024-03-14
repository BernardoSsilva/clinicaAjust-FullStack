import { Entity } from '../../shared/entity';
type UserEntityProps = {
    userName: string;
    userEmail: string;
    userPassword: string;
    userLogin: string;
    createdAt: Date;
};
export declare class UserEntity extends Entity<UserEntityProps> {
    set userName(value: string);
    get userName(): string;
    set userEmail(value: string);
    get userEmail(): string;
    set userPassword(value: string);
    get userPassword(): string;
    set userLogin(value: string);
    get userLogin(): string;
    get createdAt(): Date;
    constructor(props: any);
    validate(): Promise<string[]>;
    validateName(userName: string): string | null;
    validateLogin(userLogin: string): string | null;
    validateEmail(userEmail: string): string | null;
    validatePassword(userPassword: string): string | null;
}
export {};
