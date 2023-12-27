import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReservationsService } from '../services/reservations.service';
import { ReservationDTO } from '../dto/reservation.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('Reservations')
@Controller('reservations')
@UseGuards(AuthGuard)
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  public async saveReservations(
    @Body() body: ReservationDTO,
    @Req() req: Request,
  ) {
    body.userId = +req.idUser;
    return await this.reservationsService.save(body);
  }
}
