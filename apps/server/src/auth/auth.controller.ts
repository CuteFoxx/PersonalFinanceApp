import {
  Bind,
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { type Request as ReqType } from 'express';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Bind(Request())
  @Post('login')
  login(@Request() req: ReqType) {
    if (!req.user) {
      throw new Error('User not found in request');
    }
    return this.authService.login(req.user);
  }

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
