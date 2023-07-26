import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {
  @ApiProperty({ example: 'user1', description: 'Foydalanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'user1@mail.uz',
    description: 'Foydalanuvchi pochtasi',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Uzbeki$tan', description: 'Foydalanuvchi paroli' })
  @IsStrongPassword()
  password: string;
}
