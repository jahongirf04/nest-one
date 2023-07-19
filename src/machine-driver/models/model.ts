import {Table, Model, Column, DataType} from "sequelize-typescript"

interface TableAttr {
  machineId: number;
  driverId: number;
}

@Table({ tableName: 'machine-driver' })
export class Tablee extends Model<Tablee, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  machinId: number;
  @Column({
    type: DataType.INTEGER,
  })
  driverId: number
}