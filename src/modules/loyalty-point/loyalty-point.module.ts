import { Module } from '@nestjs/common';
import { LoyaltyPointService } from './loyalty-point.service';
import { LoyaltyPointController } from './loyalty-point.controller';
import { LoyaltyPoint } from './entities/loyalty-point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LoyaltyPoint])],
  controllers: [LoyaltyPointController],
  providers: [LoyaltyPointService],
})
export class LoyaltyPointModule {}
