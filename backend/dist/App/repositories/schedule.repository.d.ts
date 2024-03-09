import { ScheduleEntity } from '../entites/schedules.entity';
export declare abstract class ScheduleRepository {
    abstract getAll(): Promise<ScheduleEntity[]>;
    abstract findById(id: string): Promise<ScheduleEntity>;
    abstract insert(values: any): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract update(id: string, values: any): Promise<void>;
}
