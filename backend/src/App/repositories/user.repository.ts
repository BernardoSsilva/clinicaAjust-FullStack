import { UserEntity } from '../entites/user.entity';

export abstract class UserRepository {
  abstract getAll(): Promise<UserEntity[]>;
  abstract findById(id: string): Promise<UserEntity>;
  abstract insert(values): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, values): Promise<void>;
  abstract findByEmail(email: string): Promise<UserEntity>;
}
