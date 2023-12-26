import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { DataSourceConfig } from './db/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ReservationsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
