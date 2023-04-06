import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { LoyaltyCard } from '../../loyalty-point/entities/loyalty-card.entity';
import { Purchase } from '../..//purchase/entities/purchase.entity';
import { LoyaltyPoint } from '../../loyalty-point/entities/loyalty-point.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  public_key: string;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];

  @OneToMany(() => LoyaltyPoint, (loyaltyPoint) => loyaltyPoint.user)
  loyaltyPoints: LoyaltyPoint[];
}
