import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma, User } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async find(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async createUser(data: CreateUserDto) {
    const { password, email, ...rest } = data;
    const userExists = await this.findOne({ email });

    if (userExists) {
      throw new ConflictException('User with that email already exists');
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...rest,
        password: hash,
        email,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto;
  }): Promise<User> {
    const { where, data } = params;
    const { password, ...rest } = data;

    const existingUser = await this.prisma.user.findUnique({ where });
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    let hash: string | undefined;
    const updateData: Partial<UpdateUserDto> = rest;

    if (password != null) {
      hash = await bcrypt.hash(password, 10);

      Object.assign(updateData, { password: hash });
    }

    return this.prisma.user.update({
      data: updateData,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
