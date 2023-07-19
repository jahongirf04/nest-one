import {Table, Model, Column, DataType} from "sequelize-typescript"

interface TableAttr {
  name: string
  companyId: number;
}

@Table({ tableName: 'machine' })
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
  name: string;
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number
}