import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  // DISADVANTAGES OF using Native response is-
  // 1. you loose control over NestJs Response handlers which supports interceptors and decorators
  // 2. Also it can become platform dependant. Remember that Nest supports Fastify and others as well
  // 3. Harder to test as Response needs to be mocked as well
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffee: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffee);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
