import { ScheduleEntity } from '../entites/schedules.entity';

export abstract class ScheduleRepository {
  abstract getAll(): Promise<ScheduleEntity[]>;
  abstract findById(id: string): Promise<ScheduleEntity>;
  abstract insert(values): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, values): Promise<void>;
}
