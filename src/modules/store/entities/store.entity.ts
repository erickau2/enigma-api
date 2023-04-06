import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Purchase } from '../../purchase/entities/purchase.entity';
import { LoyaltyPoint } from '../../loyalty-point/entities/loyalty-point.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => Purchase, (purchase) => purchase.store)
  purchases: Purchase[];

  @OneToMany(() => LoyaltyPoint, (loyaltyPoint) => loyaltyPoint.store)
  loyaltyPoints: LoyaltyPoint[];
}
