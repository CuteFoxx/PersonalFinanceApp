import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePotDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  targetBalance: number;

  @IsString()
  @IsOptional()
  theme: string;

  @IsNumber()
  @IsOptional()
  userId: number;
}
