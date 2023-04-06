import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoyaltyPointService } from './loyalty-point.service';
import { CreateLoyaltyPointDto } from './dto/create-loyalty-point.dto';
import { UpdateLoyaltyPointDto } from './dto/update-loyalty-point.dto';

@Controller('loyalty-point')
export class LoyaltyPointController {
  constructor(private readonly loyaltyPointService: LoyaltyPointService) {}

  @Post()
  create(@Body() createLoyaltyPointDto: CreateLoyaltyPointDto) {
    return this.loyaltyPointService.create(createLoyaltyPointDto);
  }

  @Get()
  findAll() {
    return this.loyaltyPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltyPointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoyaltyPointDto: UpdateLoyaltyPointDto) {
    return this.loyaltyPointService.update(+id, updateLoyaltyPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltyPointService.remove(+id);
  }
}
