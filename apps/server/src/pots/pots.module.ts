import { Module } from '@nestjs/common';
import { PotsController } from './pots.controller';
import { PotsService } from './pots.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PotsService, PrismaService],
  controllers: [PotsController],
})
export class PotsModule {}
