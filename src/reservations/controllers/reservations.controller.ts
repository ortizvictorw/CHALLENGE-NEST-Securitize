import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReservationsService } from '../services/reservations.service';
import { ReservationDTO } from '../dto/reservation.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { PublicAccess } from 'src/auth/decorator/public.decorator';

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
    return await this.reservationsService.save({
      ...body,
      userId: +req.userId,
    });
  }

  @PublicAccess()
  @Get()
  public async findAllReservations() {
    return await this.reservationsService.findAllReservations();
  }
}
