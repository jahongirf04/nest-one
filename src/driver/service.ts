import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/model';
import { AddDto } from './dto/add-dto';
import { UpdateDto } from './dto/update-dto';

@Injectable()
export class Service {
  constructor(
    @InjectModel(Driver)
    private tableRepo: typeof Driver,
  ) {}

  async add(addDto: AddDto): Promise<Driver> {
    const company = await this.tableRepo.create(addDto);
    return company;
  }

  async get() {
    const args = await this.tableRepo.findAll({include: { all: true }});
    return args;
  }

  async getOne(myId): Promise<Driver> {
    const arg = await this.tableRepo.findOne({
      where: { id: myId },
      include: { all: true },
    });
    return arg;
  }

  async update(updateDto: UpdateDto, myId): Promise<Driver> {
    await this.tableRepo.update(updateDto, { where: { id: myId } });
    return;
  }

  async delete(myId) {
    const arg = await this.tableRepo.findOne({ where: { id: myId } });
    arg.destroy();
    return;
  }
}
