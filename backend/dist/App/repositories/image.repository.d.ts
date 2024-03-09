import { ImageEntity } from '../entites/image.entity';
export declare abstract class ImageRepository {
    abstract getAll(): Promise<ImageEntity[]>;
    abstract findById(id: string): Promise<ImageEntity>;
    abstract insert(values: any): Promise<void>;
    abstract delete(id: string): Promise<void>;
}
