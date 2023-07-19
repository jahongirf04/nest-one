import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  controllers: [myController],
  providers: [Service],
})
export class myModule {}
