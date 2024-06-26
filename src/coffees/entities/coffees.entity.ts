import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlavourEntity } from './flavour.entity';

@Entity() // sql table = 'coffee' by default.
//If we want a different  name, specifiy the name inside Entity function
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  // @Column('json', { nullable: true })
  @JoinTable()
  @ManyToMany(
    (type) => FlavourEntity,
    (FlavourEntity) => FlavourEntity.coffees,
    {
      cascade: true, // insert
    },
  )
  flavours: Array<FlavourEntity>;
}
