import {Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript"
import { MachineDriver } from "src/machine-driver/models/model";
import { Machine } from "src/machine/models/model";

interface TableAttr {
  first_name: string
  last_name: string;
}

@Table({ tableName: 'driver' })
export class Driver extends Model<Driver, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(64),
  })
  first_name: string;

  @Column({
    type: DataType.STRING(64),
  })
  last_name: string;

  @BelongsToMany(() => Machine, () => MachineDriver)
  machines: [Machine];
}