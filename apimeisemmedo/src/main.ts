import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const fs= require("fs");
    const httpsOptions={
      key:fs.readFileSync('./secrets/create-cert-key.pem'),
      cert:fs.readFileSync('./secrets/create-cert.pem')
    }
  const app = await NestFactory.create(AppModule);
 
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted:true
    }))
  const config=new DocumentBuilder()
    .setTitle('API-Projeto Integrador')
    .setDescription("A presente API, tem como objetivo simular cadastros de possiveis usuarios e atividades")
    .setVersion('1.0')
    .addTag("usuarios")
    .addTag("entrada_saida")
    .addTag("agenda")
    .addTag("files")
    .build();
  const document=SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  app.enableCors();
  await app.listen(3010);
}
bootstrap();
