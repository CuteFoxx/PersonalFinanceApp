import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Pot } from 'generated/prisma';
import { CreatePotDto } from './dto/create-pot.dto';
import { UpdatePotDto } from './dto/update-pot.dto';

@Injectable()
export class PotsService {
  constructor(private prisma: PrismaService) {}

  async find(): Promise<Pot[]> {
    return this.prisma.pot.findMany({});
  }

  async findOne(
    potWhereUniqueInput: Prisma.PotWhereUniqueInput,
  ): Promise<Pot | null> {
    return this.prisma.pot.findUnique({
      where: potWhereUniqueInput,
    });
  }

  async create(data: CreatePotDto) {
    return this.prisma.pot.create({ data });
  }

  async update(where: Prisma.PotWhereUniqueInput, data: UpdatePotDto){
    const pot = await this.prisma.pot.findUnique({ where });
    if (!pot) {
      throw new NotFoundException('Pot not found');
    }

    Object.assign(pot, data);

    return this.prisma.pot.update({
      data: pot,
      where,
    });
  }

  async delete(where: Prisma.PotWhereUniqueInput) {
    return this.prisma.pot.delete({ where });
  }
}
