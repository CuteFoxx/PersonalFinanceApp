import {
  Bind,
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import type { Response, Request as ReqType } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Bind(Request())
  @Post('login')
  login(@Request() req: ReqType, @Res({ passthrough: true }) res: Response) {
    if (!req.user) {
      throw new Error('User not found in request');
    }
    const payload = this.authService.login(req.user);

    res.cookie('access_token', payload.access_token);

    return payload;
  }

  @Post('signup')
  async signup(
    @Body() body: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const payload = await this.authService.signup(body);

    res.cookie('access_token', payload.access_token);

    return payload;
  }
}
