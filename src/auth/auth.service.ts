import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { User } from '../user/models/user.model';
import { LoginDto } from './dto/loginDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(userDto: CreateUserDto) {
    const condidate = await this.userService.getUserByEmail(userDto.email);
    if (condidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    try{
    const user = await this.userService.getUserByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException(
        "Email yoki password noto'g'ri",
      );
    }
    const is_valid_password = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!is_valid_password) {
      throw new UnauthorizedException(
        "Email yoki password noto'g'ri",
      );
    }

    return { message: 'Xush kelibsiz', token: await this.generateToken(user) };
  } catch(e){
    return e.message
  }
  }
}
