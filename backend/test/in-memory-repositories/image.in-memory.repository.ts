import { ImageEntity } from "../../src/App/entites/image.entity";
import { ImageRepository } from "../../src/App/repositories/image.repository";

export class ImageInMemoryRepository implements ImageRepository{
    public images:ImageEntity[]=[]

    async getAll(): Promise<ImageEntity[]> {
        return await this.images
    }
    async findById(id: string): Promise<ImageEntity> {
        return await this.images.find((image) => image.id == id);
    }
    async insert(values: any): Promise<void> {
        this.images.push(values)
    }
    async delete(id: string): Promise<void> {
        const deletedImageIndex = this.images.findIndex((image) => image.id == id)
        this.images.splice(deletedImageIndex, 1)
    }
    
}