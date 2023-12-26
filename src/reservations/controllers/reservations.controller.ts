import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReservationsService } from '../services/reservations.service';

@ApiTags('Reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}
}
