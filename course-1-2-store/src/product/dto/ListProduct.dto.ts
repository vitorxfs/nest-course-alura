// import { Characteristic, Image } from '../product.entity';

import { ProductCharacteristicEntity } from '../product-characteristic.entity';
import { ProductImageEntity } from '../product-image.entity';

export class ListProductDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly value: number,
    readonly quantityAvailable: number,
    readonly description: string,
    readonly category: string,
    readonly characteristics: ProductCharacteristicEntity[],
    readonly images: ProductImageEntity[],
    readonly registeredAt: string,
    readonly updatedAt: string,
  ) {}
}
