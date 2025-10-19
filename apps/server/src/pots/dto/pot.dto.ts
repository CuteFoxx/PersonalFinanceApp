import { Expose } from 'class-transformer';

export class PotDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  balance: number;
  @Expose()
  targetBalance: number;
  @Expose()
  theme: string;
  @Expose()
  userId: number;
}
