import * as TaskModel from '../model/TaskModel';
import { Task } from '../entity/Task';

export const getAllTasks = (): Promise<Task[]> => {
    return TaskModel.getAllTasks();
};

export const createTask = (task: Task): Promise<Task> => {
    return TaskModel.createTask(task);
};

export const getTask = (taskId: number): Promise<Task> => {
    return TaskModel.getTask(taskId);
};

export const updateTask = (taskId: number, newTask: Task): Promise<Task> => {
    return TaskModel.updateTask(taskId, newTask);
};

export const deleteTask = (taskId: number): void => {
    TaskModel.deleteTask(taskId);
};