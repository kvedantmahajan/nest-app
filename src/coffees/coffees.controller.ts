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

@Controller('coffees')
export class CoffeesController {
  @Get()
  // DISADVANTAGES OF using Native response is-
  // 1. you loose control over NestJs Response handlers which supports interceptors and decorators
  // 2. Also it can become platform dependant. Remember that Nest supports Fastify and others as well
  // 3. Harder to test as Response needs to be mocked as well
  findAll(@Query() paginationQuery): string {
    const { limit, offset } = paginationQuery;
    return `Here are all results for limit: ${limit} and offset: ${offset}`;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Here is the #${id} you requested`;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Updated #${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id: string, @Body() body) {
    return `Deleted #${id}`;
  }
}
