import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity{.js}'],
  migrations: ['dist/migrations/*.js'],
});

datasource.initialize();
export default datasource;
