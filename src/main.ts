import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './core/exception';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1')

  ///Global Config
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  await app.listen(5000);



}
bootstrap();