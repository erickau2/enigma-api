import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';
import { User } from '../user/entities/user.entity';
import { Store } from '../store/entities/store.entity';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchaseRepository: Repository<Purchase>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    const user = await this.userRepository.findOneBy({
      id: createPurchaseDto.userId,
    });
    const store = await this.storeRepository.findOneBy({
      id: createPurchaseDto.storeId,
    });

    const purchase = this.purchaseRepository.create({
      ...createPurchaseDto,
      user,
      store,
    });
    return this.purchaseRepository.save(purchase);
  }

  async findAll(): Promise<Purchase[]> {
    return this.purchaseRepository.find();
  }

  async findOne(id: number): Promise<Purchase> {
    return this.purchaseRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePurchaseDto: UpdatePurchaseDto,
  ): Promise<Purchase> {
    const purchase = await this.purchaseRepository.findOneBy({ id });
    this.purchaseRepository.merge(purchase, updatePurchaseDto);
    return this.purchaseRepository.save(purchase);
  }

  async remove(id: number): Promise<void> {
    await this.purchaseRepository.delete(id);
  }
}
