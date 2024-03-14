import { ImageRepository } from "src/App/repositories/image.repository";
import { CreateImageDto } from "src/shared/dtos/images/createImageDto";

export class CreateImageUseCase{
    constructor(private imageRepository:ImageRepository){
    }

    async execute(createImageDate:CreateImageDto){
        await this.imageRepository.insert(createImageDate)
    }
}