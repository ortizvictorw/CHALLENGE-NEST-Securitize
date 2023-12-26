import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [UsersModule, ReservationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
