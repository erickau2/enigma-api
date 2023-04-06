import { IsNotEmpty, IsEnum, IsNumber, IsString } from 'class-validator';
import { CouponCategoryEnum } from '../entities/promotion.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePromotionDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsEnum(CouponCategoryEnum)
  category: CouponCategoryEnum;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  image: string;
}
