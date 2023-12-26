import { BaseEntity, Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IUser } from 'src/interfaces/user.interfaces';

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
}
