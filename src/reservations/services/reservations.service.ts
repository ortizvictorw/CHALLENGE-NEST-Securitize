import { Injectable } from '@nestjs/common';
import { ReservationDTO } from '../dto/reservation.dto';
import { ReservationsEntity } from '../entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(ReservationsEntity)
    private readonly reservationRepository: Repository<ReservationsEntity>,
  ) {}
  public async save(body: ReservationDTO): Promise<ReservationsEntity> {
    try {
      return await this.reservationRepository.save(body);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
