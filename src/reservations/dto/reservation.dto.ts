import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, Matches } from 'class-validator';

export class ReservationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[0-9]{10}$/)
  phoneNumber: string;

  userId: number;
}

export class ReservationUpdateDTO {
  @ApiProperty()
  @IsDate()
  date: Date;
}
