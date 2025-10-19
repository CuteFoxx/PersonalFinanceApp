import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePotDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  balance: number;

  @IsNumber()
  targetBalance: number;

  @IsString()
  theme: string;

  @IsNumber()
  userId: number;
}
