import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PotQueryDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value))
  userId: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value))
  balance: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }: { value: string }) => parseInt(value))
  targetBalance: number;

  @IsOptional()
  @IsString()
  theme: string;
}
