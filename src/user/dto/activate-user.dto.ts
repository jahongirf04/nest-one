import { ApiProperty } from "@nestjs/swagger";

export class ActivateUserDto {
  @ApiProperty({ example: 1, description: 'Aktivlashtirish kerak bolgan foydalanuvchi paroli' })
  readonly userId: number;
}