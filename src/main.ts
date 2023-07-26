import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { ValidationPipe } from './Pipe/validation.pipe';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try{
    const PORT = process.env.PORT || 3030
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
    .setTitle("Nest One project")
    .setDescription("REST API")
    .setVersion("1.0.0")
    .addTag("NestJS, Postgres, Sequielize")
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)
    await app.listen(PORT, ()=>{
      console.log(`Server ${PORT} - portda ishga tushdi`);
      
    });
  } catch(e){
    console.log(e.message);
    
  }
}
start();
