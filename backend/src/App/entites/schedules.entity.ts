import { Entity } from '../../shared/entity';

type ScheduleProps = {
  scheduleDate: Date,
  authorId: string,
  createdAt: Date,
  client: string,
};
export class ScheduleEntity extends Entity<ScheduleProps> {
  get scheduleDate(): Date {
    return this.props.scheduleDate;
  }

  get authorId(): string {
    return this.props.authorId;
  }

  set client(value: string) {
    this.client = value;
  }

  get client(): string {
    return this.props.client;
  }
}
