import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // block swagger on production
  if (process.env.NODE_ENV !== 'prod') {
    const docs = new DocumentBuilder()
      .setTitle('Fynder.API documentation')
      .setDescription('Restful/Websocket/GraphQL API for fynder.ai')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, docs);
    SwaggerModule.setup('api', app, document);
  }

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(4000);
}
bootstrap();
