import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserSessionType } from './entities/user.entity';
import { LoginReturnBodyType, UsersService } from './users/users.service';
import { Request } from 'express';

export type UserRequest = Request &
  Record<'user', UserSessionType> &
  Record<'token', string>;

export type LoginBodyType = {
  mail: string;
  password: string;
};
@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body() { mail, password }: LoginBodyType,
  ): Promise<LoginReturnBodyType> {
    return this.usersService.login(mail, password);
  }
}
