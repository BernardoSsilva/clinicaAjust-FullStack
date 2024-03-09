import { ImageEntity } from '../entites/image.entity';

export abstract class ImageRepository {
  abstract getAll(): Promise<ImageEntity[]>;
  abstract findById(id: string): Promise<ImageEntity>;
  abstract insert(values): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
