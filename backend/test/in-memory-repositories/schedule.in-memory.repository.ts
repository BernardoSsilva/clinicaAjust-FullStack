import { ScheduleEntity } from '../../src/App/entites/schedules.entity';
import { ScheduleRepository } from '../../src/App/repositories/schedule.repository';

export class InMemoryScheduleRepository implements ScheduleRepository {
  public schedules: ScheduleEntity[] = [];
  async getAll(): Promise<ScheduleEntity[]> {
    return await this.schedules;
  }
  async findById(id: string): Promise<ScheduleEntity> {
    return await this.schedules.find((schedule) => (schedule.id = id));
  }
  insert(values: any): Promise<void> {
    this.schedules.push(values);
    return;
  }
  delete(id: string): Promise<void> {
    const deletedIndex = this.schedules.findIndex(
      (schedule) => schedule.id == id,
    );
    this.schedules.splice(deletedIndex, 1);
    return;
  }
  update(id: string, values: any): Promise<void> {
    const editedScheduleIndex = this.schedules.findIndex(
      (schedule) => schedule.id == id,
    );
    this.schedules[editedScheduleIndex] = values;
    return;
  }
}
