import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Store } from '../../store/entities/store.entity';

@Entity()
export class LoyaltyPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.loyaltyPoints)
  user: User;

  @ManyToOne(() => Store, (store) => store.loyaltyPoints)
  store: Store;

  @Column({ type: 'int' })
  points: number;

  @Column({ type: 'varchar' })
  txHash: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
