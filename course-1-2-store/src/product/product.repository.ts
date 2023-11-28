import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.products.push(product);
  }

  async list(): Promise<ProductEntity[]> {
    return this.products;
  }

  async update(id: string, data: Partial<ProductEntity>) {
    const product = this.products.find((u) => u.id === id);

    if (!product) {
      throw new Error('Product not found');
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === id) {
        return;
      }

      product[key] = value;
    });

    return product;
  }

  async delete(id: string) {
    this.products = this.products.filter((u) => u.id !== id);
    return;
  }
}
