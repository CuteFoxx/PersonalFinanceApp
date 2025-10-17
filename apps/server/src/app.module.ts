import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PotsModule } from './pots/pots.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, PotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
