import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlavourEntity } from './flavour.entity/flavour.entity';

@Entity() // sql table = 'coffee' by default.
//If we want a different  name, specifiy the name inside Entity function
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @Column('json', { nullable: true })
  @JoinTable()
  @ManyToMany((type) => FlavourEntity, (FlavourEntity) => FlavourEntity.coffees)
  flavours: Array<string>;
}
