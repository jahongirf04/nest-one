import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tablee } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([Tablee])],
  controllers: [myController],
  providers: [Service],
})
export class CompanyModule {}
