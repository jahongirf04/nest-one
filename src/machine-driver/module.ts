import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MachineDriver } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([MachineDriver])],
  controllers: [myController],
  providers: [Service],
})
export class myModule {}
