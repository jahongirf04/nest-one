import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, isNumber } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsNotEmpty()
    readonly content: string

    @IsNumber()
    @Type(()=> Number)
    readonly userId: number
}
