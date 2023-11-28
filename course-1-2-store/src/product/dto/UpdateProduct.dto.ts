import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';
import {
  ProductCharacteristicsDTO,
  ProductImageDTO,
} from './CreateProduct.dto';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @IsOptional()
  value: number;

  @IsNumber({ maxDecimalPlaces: 0 })
  @IsNotEmpty()
  @IsOptional()
  quantityAvailable: number;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  category: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDTO)
  @IsOptional()
  characteristics: ProductCharacteristicsDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  registeredAt: string;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  updatedAt: string;
}
