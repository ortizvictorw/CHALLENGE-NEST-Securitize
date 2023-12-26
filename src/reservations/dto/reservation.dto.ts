import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class ReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: Date;
}

export class ReservationUpdateDTO {
  @ApiProperty()
  @IsDateString()
  date: Date;
}
