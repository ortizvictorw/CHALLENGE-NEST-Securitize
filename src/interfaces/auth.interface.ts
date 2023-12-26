import { UsersEntity } from 'src/users/entities/user.entity';

export interface PayloadToken {
  sub: string;
}

export interface AuthBody {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UsersEntity;
}

export interface AuthTokenResult {
  sub: string;
  iat: number;
  exp: number;
}

export interface IUseToken {
  sub: string;
  isExpired: boolean;
}
