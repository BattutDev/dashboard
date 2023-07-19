import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin as string);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  await app.listen(8080, '0.0.0.0');
}
bootstrap();
