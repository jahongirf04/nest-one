import {Table, Model, Column, DataType} from "sequelize-typescript"

interface TableAttr{
    full_name: string
    birth_day: string
    salary: number
    companyId: number
}

@Table({ tableName: 'builder' })
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
  full_name: string;
  @Column({
    type: DataType.STRING(100),
  })
  birth_day: string;
  @Column({
    type: DataType.INTEGER,
  })
  salary: number;
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number
}