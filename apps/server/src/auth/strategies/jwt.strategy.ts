import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { User } from 'generated/prisma';
import { Request } from 'express';

interface AuthJwtPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    const jwtSecret = configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => JwtStrategy.ExtractJWT(req),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: AuthJwtPayload): Promise<Partial<User>> {
    if (payload.email == null) {
      throw new UnauthorizedException('Invalid token payload');
    }

    const user = await this.usersService.findOne({ email: payload.email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return { id: user.id, email: user.email };
  }

  private static ExtractJWT(req: Request): string | null {
    const cookies = req.cookies as Record<string, unknown> | undefined;

    if (cookies && typeof cookies['access_token'] === 'string') {
      return cookies['access_token'];
    }

    return null;
  }
}
