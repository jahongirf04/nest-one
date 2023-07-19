import {Table, Model, Column, DataType} from "sequelize-typescript"

interface TableAttr {
  first_name: string
  last_name: string;
}

@Table({ tableName: 'driver' })
export class Tablee extends Model<Tablee, TableAttr> {
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
  last_name: string
}