import { Module } from '@nestjs/common';
import { LoyaltyPointService } from './loyalty-point.service';
import { LoyaltyPointController } from './loyalty-point.controller';

@Module({
  controllers: [LoyaltyPointController],
  providers: [LoyaltyPointService]
})
export class LoyaltyPointModule {}
