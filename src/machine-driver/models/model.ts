import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript"
import { Driver } from "../../driver/models/model";
import { Machine } from "../../machine/models/model";

interface TableAttr {
  machineId: number;
  driverId: number;
}

@Table({ tableName: 'machine-driver' })
export class MachineDriver extends Model<MachineDriver, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
  })
  machineId: number;

  @ForeignKey(() => Driver)
  @Column({
    type: DataType.INTEGER,
  })
  driverId: number;
}