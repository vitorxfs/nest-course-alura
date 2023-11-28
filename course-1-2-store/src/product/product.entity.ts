import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCharacteristicEntity } from './product-characteristic.entity';
import { ProductImageEntity } from './product-image.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'quantityAvailable', nullable: false })
  quantityAvailable: number;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'category', length: 100, nullable: false })
  category: string;

  @OneToMany(
    () => ProductCharacteristicEntity,
    (productCharacteristicEntity) => productCharacteristicEntity.product,
    { cascade: true, eager: true },
  )
  characteristics: ProductCharacteristicEntity[];

  @OneToMany(
    () => ProductImageEntity,
    (productImageEntity) => productImageEntity.product,
    { cascade: true, eager: true },
  )
  images: ProductImageEntity[];

  @CreateDateColumn({ name: 'registeredAt' })
  registeredAt: string;

  @CreateDateColumn({ name: 'updatedAt' })
  updatedAt: string;

  @CreateDateColumn({ name: 'deletedAt' })
  deletedAt: string;
}
