import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Serialize } from 'src/decorators/serialize.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.usersService.findOne({ id: parseInt(id) });
  }

  @Get()
  async getUsers() {
    return await this.usersService.find();
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.updateUser({ where: { id: parseInt(id) }, data });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser({ id: parseInt(id) });
  }
}
