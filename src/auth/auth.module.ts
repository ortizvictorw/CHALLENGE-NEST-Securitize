import { UsersModule } from './../users/users.module';
import { Global, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersService } from 'src/users/services/users.service';

@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
