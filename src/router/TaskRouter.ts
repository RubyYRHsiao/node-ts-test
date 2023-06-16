import express from 'express';
import { getAllTasks, createTask, updateTask, getTask, deleteTask } from '../controller/TaskController';

const router = express.Router();
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;