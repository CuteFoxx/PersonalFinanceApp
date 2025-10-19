import { IsNumber, Min } from 'class-validator';

export class DepostDto {
  @IsNumber()
  @Min(0)
  amount: number;
}
