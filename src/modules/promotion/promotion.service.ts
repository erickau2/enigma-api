import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Promotion')
@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionRepository: Repository<Promotion>,
  ) {}

  async create(createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    const promotion = this.promotionRepository.create(createPromotionDto);
    return this.promotionRepository.save(promotion);
  }

  async findAll(): Promise<Promotion[]> {
    return this.promotionRepository.find();
  }

  async findOne(id: number): Promise<Promotion> {
    return this.promotionRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePromotionDto: UpdatePromotionDto,
  ): Promise<Promotion> {
    const promotion = await this.promotionRepository.findOneBy({ id });
    this.promotionRepository.merge(promotion, updatePromotionDto);
    return this.promotionRepository.save(promotion);
  }

  async remove(id: number): Promise<void> {
    await this.promotionRepository.delete(id);
  }
}
