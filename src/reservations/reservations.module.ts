import { Module } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations.controller';
import { ReservationsService } from './services/reservations.service';
import { ReservationsEntity } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationsEntity])],
  providers: [ReservationsService],
  controllers: [ReservationsController],
  exports: [ReservationsService, TypeOrmModule],
})
export class ReservationsModule {}
