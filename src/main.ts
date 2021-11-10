import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
Date.prototype.toJSON = function () {
  return this.valueOf();
};
bootstrap();
