import { Module } from '@nestjs/common';
import { CompanyController } from './controller';
import { CompanyService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tablee } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([Tablee])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
