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
    validateName(userName: any): Promise<"O nome é requirido" | "O nome deve ser formado por caracteres">;
    validateLogin(userLogin: any): Promise<"O login é requirido" | "O login deve ser formado por caracteres">;
    validateEmail(userEmail: any): Promise<"O email é requirido" | "O email deve ser formado por caracteres">;
    validatePassword(userPassword: any): Promise<"A senha é requirida" | "A senha deve ser formada por caracteres" | "A senha deve ter no mínimo 8 caracteres">;
}
export {};
