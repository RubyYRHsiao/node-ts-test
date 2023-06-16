import { Request, Response } from 'express';
import * as TaskService from '../service/TaskService';

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.status(200).json({ status: 'success', data: { tasks } });
    } catch (e) {
        res.status(e.statusCode).json({ msg: e.message });
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskService.createTask(req.body);
        res.status(201).json({ status: 'success', data: { task } });
    } catch (e) {
        res.status(e.statusCode).json({ msg: e.message });
    }
};

export const getTask = async (req: Request, res: Response) => {
    try {
        const { id: taskId } = req.params;
        const task = await TaskService.getTask(parseInt(taskId, 10));
        if (task) {
            res.status(200).json({ status: 'success', data: { task } });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (e) {
        res.status(e.statusCode).json({ msg: e.message });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id: taskId } = req.params;
        const isTaskExists = await TaskService.getTask(parseInt(taskId, 10));
        if (isTaskExists) {
            const task = await TaskService.updateTask(parseInt(taskId, 10), req.body);
            res.status(200).json({ status: 'success', data: { task } });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (e) {
        res.status(e.statusCode).json({ msg: e.message });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id: taskId } = req.params;
        const isTaskExists = await TaskService.getTask(parseInt(taskId, 10));
        if (isTaskExists) {
            TaskService.deleteTask(parseInt(taskId, 10));
            res.status(200).json({ status: 'success' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (e) {
        res.status(e.statusCode).json({ msg: e.message });
    }
};