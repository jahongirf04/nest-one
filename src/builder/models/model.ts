import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript"

interface TableAttr{
    full_name: string
    birth_day: string
    salary: number
    companyId: number
}

import {Company} from "../../company/models/company.model"

@Table({ tableName: 'builder' })
export class Builder extends Model<Builder, TableAttr> {  
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
  @ForeignKey(()=>Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number

  @BelongsTo(()=>Company)
  company: Company
}