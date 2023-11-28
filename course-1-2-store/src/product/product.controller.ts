import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ListProductDTO } from './dto/ListProduct.dto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(
    private productRepository: ProductRepository,
    private productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() data: CreateProductDTO) {
    const productEntity = new ProductEntity();
    productEntity.category = data.category;
    productEntity.description = data.description;
    productEntity.name = data.name;
    productEntity.quantityAvailable = data.quantityAvailable;
    productEntity.value = data.value;
    productEntity.registeredAt = data.registeredAt;
    productEntity.updatedAt = data.updatedAt;
    productEntity.characteristics = data.characteristics;
    productEntity.images = data.images;

    await this.productService.createProduct(productEntity);

    return {
      product: new ListProductDTO(
        productEntity.id,
        productEntity.name,
        productEntity.value,
        productEntity.quantityAvailable,
        productEntity.description,
        productEntity.category,
        productEntity.characteristics,
        productEntity.images,
        productEntity.registeredAt,
        productEntity.updatedAt,
      ),
      message: 'Product created successfully',
    };
  }

  @Get()
  async listProducts() {
    const products = await this.productService.listProducts();

    return products;
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    await this.productService.updateProduct(id, data);

    return {
      message: 'Product updated successfully',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);

    return {
      message: 'Product deleted successfully',
    };
  }
}
