import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Task } from '../entity/Task';

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'SA',
    password: 'P@ssw0rd',
    database: 'TestDB',
    entities: [Task],
    synchronize: true,
    logging: false,
    extra: {
        trustServerCertificate: true,
    }
});