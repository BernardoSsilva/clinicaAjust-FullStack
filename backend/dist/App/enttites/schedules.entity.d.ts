import { Entity } from 'src/shared/entity';
type ScheduleProps = {
    scheduleDate: Date;
    authorId: string;
    createdAt: Date;
    client: string;
};
export declare class ScheduleEntity extends Entity<ScheduleProps> {
    get scheduleDate(): Date;
    get authorId(): string;
    set client(value: string);
    get client(): string;
}
export {};
