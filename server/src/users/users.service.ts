import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity, { UserSessionType } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RandomGenerator } from 'typeorm/util/RandomGenerator';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export type LoginReturnBodyType = {
  token: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private jwtService: JwtService,
  ) {}

  getById(uid: number): Promise<UserSessionType> {
    return new Promise((resolve, reject) => {
      this.userRepository
        .findOne({
          where: {
            id: uid,
          },
        })
        .then((user) => {
          if (user) {
            delete user.password;
            resolve(user);
          } else throw new NotFoundException('Cannot found this user');
        })
        .catch(reject);
    });
  }

  login(mail: string, password: string): Promise<LoginReturnBodyType> {
    return new Promise((resolve, reject) => {
      this.userRepository
        .findOne({
          where: {
            mail,
            password: RandomGenerator.sha1(password),
            enabled: true,
          },
        })
        .then(async (user) => {
          if (user) {
            delete user.password;
            const payload = { mail, password };
            const token = this.jwtService.sign(payload, {
              secret: this.configService.get('JWT_SECRET'),
            });
            await this.cacheManager.set(token, user);
            resolve({
              token,
            });
          } else throw new UnauthorizedException('Bad credentials');
        })
        .catch(reject);
    });
  }

  logout(token: string): Promise<null> {
    return new Promise((resolve, reject) => {
      this.cacheManager
        .del(token)
        .then(() => resolve(null))
        .catch(reject);
    });
  }
}
