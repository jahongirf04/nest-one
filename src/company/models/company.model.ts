import {Table, Model, Column, DataType} from "sequelize-typescript"

interface TableAttr{
    name: string
    address: string
    phone: string
}

@Table({ tableName: 'company' })
export class Tablee extends Model<Tablee, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  name: string;
  @Column({
    type: DataType.STRING(100),
  })
  address: string;
  @Column({
    type: DataType.STRING(100),
  })
  phone: string;
}