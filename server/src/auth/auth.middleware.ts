import {
  BadRequestException,
  Inject,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UserSessionType } from '../entities/user.entity';
import { UserRequest } from '../app.controller';
import { NextFunction, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async use(req: UserRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; //('Authorization').split(' ')[1];
    if (!token)
      throw new BadRequestException(
        'Missing Authorization header with bearer format',
      );
    const user: UserSessionType = await this.cacheManager.get(token);
    if (!user) throw new UnauthorizedException('Not authenticated');
    req.user = user;
    req.token = token;

    next();
  }
}
