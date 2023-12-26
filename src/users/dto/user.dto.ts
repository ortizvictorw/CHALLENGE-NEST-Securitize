import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UserUpdateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  age: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password: string;
}
