import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASS'),
        database: configService.get('POSTGRES_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    CacheModule.register({
      isGlobal: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store: async () => {
        return await redisStore({
          // Store-specific configuration:
          socket: {
            host: 'localhost',
            port: process.env.REDIS_PORT as unknown as number,
          },
          ttl: 0,
        });
      },
    }),
  ],
})
export class DatabaseModule {}
