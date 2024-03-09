import { Entity } from '../../shared/entity';
type DiagnosisProps = {
    authorId: string;
    createdAt: Date;
    description: string;
};
export declare class DiagnosisEntity extends Entity<DiagnosisProps> {
    get authorId(): string;
    get createdAt(): Date;
    get description(): string;
    set description(value: string);
}
export {};
