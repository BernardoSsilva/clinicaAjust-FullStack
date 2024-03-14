import { Entity } from '../../shared/entity';
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
    constructor(props: any);
    validate(): Promise<string[]>;
    validateAuthorId(authorId: string): string | null;
    validateClient(client: string): string | null;
}
export {};
