import { IsNumber, IsString } from 'class-validator';

export class CreatePotDto {
  @IsString()
  name: string;

  @IsNumber()
  targetBalance: number;

  @IsString()
  theme: string;

  @IsNumber()
  userId: number;
}
