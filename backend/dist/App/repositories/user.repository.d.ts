import { UserEntity } from '../entites/user.entity';
export declare abstract class UserRepository {
    abstract getAll(): Promise<UserEntity[]>;
    abstract findById(id: string): Promise<UserEntity>;
    abstract insert(values: any): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract update(id: string, values: any): Promise<void>;
    abstract findByEmail(email: string): Promise<UserEntity>;
}
