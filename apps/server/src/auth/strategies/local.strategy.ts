import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Dependencies, NotFoundException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    super({ usernameField: 'email' });
    this.authService = authService;
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new NotFoundException(`User dosen't exists`);
    }
    return user;
  }
}
