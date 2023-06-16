import { AppDataSource } from './dbConfig';

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Successfully connected to the database');
    } catch (error) {
        console.log(error);
    }
}