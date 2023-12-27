import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate } from 'class-validator';

export class ReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  userId: number;
}

export class ReservationUpdateDTO {
  @ApiProperty()
  @IsDate()
  date: Date;
}
