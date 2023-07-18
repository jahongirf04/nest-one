import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try{
    const PORT = process.env.PORT || 3030
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, ()=>{
      console.log(`Server ${PORT} - portda ishga tushdi`);
      
    });
  } catch(e){
    console.log(e.message);
    
  }
}
start();
