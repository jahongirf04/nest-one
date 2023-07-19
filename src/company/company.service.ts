import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { AddDto } from './dto/add.dto';
import { UpdateDto } from './dto/update-dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private tableRepo: typeof Company,
  ) {}

  async add(addDto: AddDto): Promise<Company> {
    const company = await this.tableRepo.create(addDto);
    return company;
  }

  async get() {
    const args = await this.tableRepo.findAll({ include: { all: true } });
    return args;
  }

  async getOne(myId): Promise<Company> {
    const arg = await this.tableRepo.findOne({
      where: { id: myId },
      include: { all: true },
    });
    return arg;
  }

  async update(updateDto: UpdateDto, myId): Promise<Company> {
    await this.tableRepo.update(updateDto, { where: { id: myId } });
    return;
  }

  async delete(myId) {
    const arg = await this.tableRepo.findOne({ where: { id: myId } });
    arg.destroy();
    return;
  }
}
