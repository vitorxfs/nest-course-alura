import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { ProductEntity } from '../product.entity';

export class ProductCharacteristicsDTO {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  product: ProductEntity;
}

export class ProductImageDTO {
  id: string;

  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  product: ProductEntity;
}

export class CreateProductDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  value: number;

  @IsNumber({ maxDecimalPlaces: 0 })
  quantityAvailable: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDTO)
  characteristics: ProductCharacteristicsDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];

  @IsNotEmpty()
  @IsDateString()
  registeredAt: string;

  @IsNotEmpty()
  @IsDateString()
  updatedAt: string;
}
