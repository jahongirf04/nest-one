import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { myModule as BuilderModule } from './builder/module';
import { myModule as DriverModule } from './driver/module';
import { myModule as MachineModule } from './machine/module';
import { myModule as MachineDriverModule } from './machine-driver/module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: true,
    }),
    CompanyModule,
    BuilderModule,
    DriverModule,
    MachineDriverModule,
    MachineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
