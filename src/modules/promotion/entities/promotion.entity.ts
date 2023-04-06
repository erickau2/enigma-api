import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum CouponCategoryEnum {
  All = 'All',
  Retail = 'Retail',
  Restaurant = 'Restaurant',
  Entertainment = 'Entertainment',
  Shopping = 'Shopping',
}

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CouponCategoryEnum,
    default: CouponCategoryEnum.All,
  })
  category: CouponCategoryEnum;

  @Column({ type: 'float' })
  price: number;

  @Column()
  image: string;
}
