import { Task } from '../entity/Task';
import { AppDataSource } from '../db/dbConfig';

const taskRepository = AppDataSource.getRepository(Task);

export const getAllTasks = async (): Promise<Task[]> => {
    return await taskRepository.find();
};

export const createTask = async (task: Task): Promise<Task> => {
    return await taskRepository.save(task);
};

export const getTask = async (taskId: number): Promise<Task> => {
    return await taskRepository.findOneBy({ id: taskId });
};

export const updateTask = async (taskId: number, newTask: Task): Promise<Task> => {
    await taskRepository.update(taskId, newTask);
    return taskRepository.findOneBy({ id: taskId });
};

export const deleteTask = async (taskId: number): Promise<void> => {
    await taskRepository.delete(taskId);
};