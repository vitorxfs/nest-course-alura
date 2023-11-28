import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ListProductDTO } from './dto/ListProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: ProductEntity) {
    return await this.productRepository.save(product);
  }

  async listProducts() {
    const products = await this.productRepository.find();
    const mappedProducts = products.map(
      (product) =>
        new ListProductDTO(
          product.id,
          product.name,
          product.value,
          product.quantityAvailable,
          product.description,
          product.category,
          product.characteristics,
          product.images,
          product.registeredAt,
          product.updatedAt,
        ),
    );

    return mappedProducts;
  }

  async updateProduct(id: string, product: Partial<ProductEntity>) {
    return await this.productRepository.update(id, product);
  }

  async deleteProduct(id: string) {
    return await this.productRepository.delete(id);
  }
}
