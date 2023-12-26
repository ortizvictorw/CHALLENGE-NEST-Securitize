import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IUser } from 'src/interfaces/user.interfaces';
import { ReservationsEntity } from 'src/reservations/entities/reservation.entity';
import { BaseEntity } from 'src/db/base.entities';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => ReservationsEntity, (reservation) => reservation.user)
  reservations: ReservationsEntity[];
}
