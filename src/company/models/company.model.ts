import {Table, Model, Column, DataType, HasMany} from "sequelize-typescript"

interface CompanyAttr{
    name: string
    address: string
    phone: string
}

import {Builder} from "../../builder/models/model"
import { Machine } from "../../machine/models/model"

@Table({ tableName: 'company' })
export class Company extends Model<Company, CompanyAttr> {
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

  @HasMany(() => Builder)
  builders: Builder[];

  @HasMany(() => Machine)
  machines: Machine[];
}