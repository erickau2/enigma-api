// create-purchase.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePurchaseDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  userId: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  storeId: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  purchaseDate: Date;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  txHash: string;
}
