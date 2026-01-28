import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { LoginModule } from './login.module';

async function bootstrap() {
  const app = await NestFactory.create(LoginModule);

  app.enableCors({ origin: true });
  app.use(cookieParser('secret'));

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
