import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoyaltyPointDto } from './dto/create-loyalty-point.dto';
import { UpdateLoyaltyPointDto } from './dto/update-loyalty-point.dto';
import { LoyaltyPoint } from './entities/loyalty-point.entity';

@Injectable()
export class LoyaltyPointService {
  constructor(
    @InjectRepository(LoyaltyPoint)
    private readonly loyaltyPointRepository: Repository<LoyaltyPoint>,
  ) {}

  async create(createLoyaltyPointDto: CreateLoyaltyPointDto) {
    const loyaltyPoint = this.loyaltyPointRepository.create(
      createLoyaltyPointDto,
    );
    return await this.loyaltyPointRepository.save(loyaltyPoint);
  }

  async findAll() {
    return await this.loyaltyPointRepository.find();
  }

  async findOne(id: number) {
    return await this.loyaltyPointRepository.findOneBy({ id });
  }

  async update(id: number, updateLoyaltyPointDto: UpdateLoyaltyPointDto) {
    await this.loyaltyPointRepository.update(id, updateLoyaltyPointDto);
    return await this.loyaltyPointRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.loyaltyPointRepository.delete(id);
  }
}
