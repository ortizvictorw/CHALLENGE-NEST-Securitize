import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './db/config';

@Module({
  imports: [UsersModule, ReservationsModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
