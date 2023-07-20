import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { myModule as BuilderModule } from './builder/module';
import { myModule as DriverModule } from './driver/module';
import { myModule as MachineModule } from './machine/module';
import { myModule as MachineDriverModule } from './machine-driver/module';
import { RolesModule } from './roles/roles.module';
import { Company } from './company/models/company.model';
import { Driver } from './driver/models/model';
import { Builder } from './builder/models/model';
import { Role } from './roles/models/role.model';
import { Machine } from './machine/models/model';
import { MachineDriver } from './machine-driver/models/model';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.model';
import { UserRoles } from './roles/models/user-roles.model';
import { AuthModule } from './auth/auth.module';

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
      models: [Company, Driver, Builder, Machine,MachineDriver,Role, User, UserRoles],
      autoLoadModels: true,
      logging: false,
    }),
    CompanyModule,
    BuilderModule,
    DriverModule,
    MachineDriverModule,
    MachineModule,
    RolesModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
