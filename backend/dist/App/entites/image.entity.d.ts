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
}
export {};
