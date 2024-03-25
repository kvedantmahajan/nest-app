import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Mocha Latte',
      brand: 'Third wave coffee',
      flavours: ['chocolate', 'vanilla'],
    },
  ];
  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return this.coffees;
  }
  update(id: string, updateCoffeeDto: Partial<Coffee>) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees[coffeeIndex] = {
        ...this.coffees[coffeeIndex],
        ...updateCoffeeDto,
      };
      return this.coffees[coffeeIndex];
    }
    return [];
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
    return this.coffees;
  }
}
