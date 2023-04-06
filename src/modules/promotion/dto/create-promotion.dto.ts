import { IsNotEmpty, IsEnum, IsNumber, IsString } from 'class-validator';
import { CouponCategoryEnum } from '../entities/promotion.entity';

export class CreatePromotionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(CouponCategoryEnum)
  category: CouponCategoryEnum;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  image: string;
}
