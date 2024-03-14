import { Entity } from '../../shared/entity';
type ImageProps = {
    createdAt: Date;
    diagnosisId: string;
    stored: string;
    imageName: string;
    sizeKb: number;
};
export declare class ImageEntity extends Entity<ImageProps> {
    get createdAt(): Date;
    get diagnosisId(): string;
    get stored(): string;
    set stored(value: string);
    get imageName(): string;
    set imageName(value: string);
    set sizeKb(value: number);
    get sizeKb(): number;
    constructor(props: any);
    validate(): Promise<string[]>;
    validateDiagnosisId(diagnosisId: string): string | null;
    validateStored(stored: string): string | null;
    validateImageName(imageName: string): string | null;
    validateSizeKb(sizeKb: number): string | null;
}
export {};
