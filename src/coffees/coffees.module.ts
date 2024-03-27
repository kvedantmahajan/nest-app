import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees';
import { FlavourEntity } from './entities/flavour.entity/flavour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, FlavourEntity])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
