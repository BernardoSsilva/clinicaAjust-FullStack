import { Entity } from '../../shared/entity';
type DiagnosisProps = {
    authorId: string;
    client: string;
    title: string;
    createdAt: Date;
    description: string;
};
export declare class DiagnosisEntity extends Entity<DiagnosisProps> {
    get authorId(): string;
    get createdAt(): Date;
    get description(): string;
    set description(value: string);
    get client(): string;
    set client(value: string);
    get title(): string;
    set title(value: string);
    constructor(props: any);
    validate(): Promise<string[]>;
    validateAuthorId(authorId: string): string | null;
    validateClient(client: string): string | null;
    validateTitle(title: string): string | null;
    validateCreatedDate(createdDate: Date): string | null;
    validateDescription(description: string): string | null;
}
export {};
