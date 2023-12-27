import { Column, Entity, ManyToOne } from 'typeorm';
import { IReservation } from 'src/interfaces/reservation.interface';
import { UsersEntity } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/db/base.entities';

@Entity({ name: 'reservations' })
export class ReservationsEntity extends BaseEntity implements IReservation {
  @Column()
  date: Date;

  @Column()
  phoneNumber: string;

  @Column()
  userId: number;

  @ManyToOne(() => UsersEntity, (user) => user.reservations)
  user: UsersEntity;
}
