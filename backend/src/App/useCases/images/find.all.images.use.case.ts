import { ImageEntity } from "src/App/entites/image.entity";
import { ImageRepository } from "src/App/repositories/image.repository";

export class FindAllImagesUseCase{
    constructor(private imageRepository:ImageRepository){}

    async execute():Promise<ImageEntity[]>{
        return await this.imageRepository.getAll()
    }
}