import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import {SequelizeModule} from "@nestjs/sequelize"
import { Tablee } from './models/company.model';

@Module({
  imports: [SequelizeModule.forFeature([Tablee])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
