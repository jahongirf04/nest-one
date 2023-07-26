import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'Role qoshish kerak bolgan foydalanuvchi IDsi' })
  readonly userId: number;

  @ApiProperty({ example: 'ADMIN', description: 'Rol nomi' })
  readonly value: string;
}