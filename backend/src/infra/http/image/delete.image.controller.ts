import { DeleteImageUseCase } from './../../../App/useCases/images/delete.image.use.case';
import { Controller, Delete, Param } from "@nestjs/common";



@Controller("image/delete")
export class DeleteImageController{
    constructor(private deleteImageUseCase:DeleteImageUseCase){}

    @Delete(":id")
    async execute(@Param("id") id:string){
        await this.deleteImageUseCase.execute(id)
    }
}