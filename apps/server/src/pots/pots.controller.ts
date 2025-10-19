import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { PotsService } from './pots.service';
import { Serialize } from '../decorators/serialize.decorator';
import { PotDto } from './dto/pot.dto';
import { CreatePotDto } from './dto/create-pot.dto';
import { UpdatePotDto } from './dto/update-pot.dto';
import { DepostDto } from './dto/depost.dto';

@Serialize(PotDto)
@UseGuards(JwtAuthGuard)
@Controller('pots')
export class PotsController {
  constructor(private readonly potsService: PotsService) {}

  @Get()
  async getAllPots() {
    return await this.potsService.find();
  }

  @Get(':id')
  async getPot(@Param('id') id: string) {
    return this.potsService.findOne({ id: parseInt(id) });
  }

  @Post()
  async createPot(@Body() data: CreatePotDto) {
    return this.potsService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePotDto) {
    return await this.potsService.update({ id: parseInt(id) }, data);
  }

  @Delete(':id')
  async deletePot(@Param('id') id: string) {
    return await this.potsService.delete({ id: parseInt(id) });
  }

  @Post(':id/withdraw')
  async withdraw(@Param('id') id: string, @Body() data: DepostDto) {
    return await this.potsService.withdraw({ id: parseInt(id) }, data.amount);
  }

  @Post(':id/deposit')
  async deposit(@Param('id') id: string, @Body() data: DepostDto) {
    return await this.potsService.deposit({ id: parseInt(id) }, data.amount);
  }
}
