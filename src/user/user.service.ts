import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UserService {
  constructor (
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RolesService
  ){}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto)
    const role = await this.roleService.getRoleByValue("ADMIN")
    // const role = await this.roleService.getRoleByValue("USER")
    if(!role){
      throw new BadRequestException("Role not found")
    }
    await newUser.$set("roles", [role.id])
    await newUser.save()
    newUser.roles = [role]

    return newUser
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true}})
    return users
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {email},
      include: {all: true}
    })
    return user
  }

  async getOneUser(id: number) {
    const user = await this.userRepository.findOne({
      where: {id},
      include: {all: true}
    })
    return user
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.destroy({where: {id}})
    if (!user){
      throw new HttpException("Foydalanuvchi topilmadi", HttpStatus.NOT_FOUND)
    }
    return {message: "Foydalanuvchi o'chirildi"}
  }
}
