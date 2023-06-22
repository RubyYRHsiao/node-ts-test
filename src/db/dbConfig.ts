import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Task } from '../entity/Task';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 15432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    entities: [Task],
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: []
});