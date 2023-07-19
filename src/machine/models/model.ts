import {Table, Model, Column, DataType, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript"
import { Company } from "src/company/models/company.model";
import { Driver } from "src/driver/models/model";
import { MachineDriver } from "src/machine-driver/models/model";

interface TableAttr {
  name: string
  companyId: number;
}

@Table({ tableName: 'machine' })
export class Machine extends Model<Machine, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(64),
  })
  name: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(()=> Driver, ()=>MachineDriver)
  drivers: Driver[]
}