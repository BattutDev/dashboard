import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from '../entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ConfigService],
  imports: [TypeOrmModule.forFeature([UserEntity]), JwtModule],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
