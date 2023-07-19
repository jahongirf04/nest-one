import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tablee } from './models/model';
import { AddDto } from './dto/add-dto';
import { UpdateDto } from './dto/update-dto';

@Injectable()
export class Service {
  constructor(
    @InjectModel(Tablee)
    private tableRepo: typeof Tablee,
  ) {}

  async add(addDto: AddDto): Promise<Tablee> {
    const company = await this.tableRepo.create(addDto);
    return company;
  }

  async get() {
    const args = await this.tableRepo.findAll();
    return args;
  }

  async getOne(myId): Promise<Tablee> {
    const arg = await this.tableRepo.findOne({ where: { id: myId } });
    return arg;
  }

  async update(updateDto: UpdateDto, myId): Promise<Tablee> {
    await this.tableRepo.update(updateDto, { where: { id: myId } });
    return;
  }

  async delete(myId) {
    const arg = await this.tableRepo.findOne({ where: { id: myId } });
    arg.destroy();
    return;
  }
}
