import express from 'express';
import addTaskController from './addtask';
import editTaskController from './edittask';
import deleteTaskController from './deletetask';
import getAllTaskController from './gettask';
import getonetaskController from './getone';
import addCatagoryController from './taskcatagory';
import getAllCatagoriesController from './getallcatagories';

const TaskController = express.Router()

TaskController.post('/addtask', addTaskController)
TaskController.put('/edittask', editTaskController)
TaskController.put('/deletetask', deleteTaskController)
TaskController.get('/getone', getonetaskController)
TaskController.get('/gettask', getAllTaskController)
TaskController.post('/addcatagories', addCatagoryController)
TaskController.get('/getallcatagories', getAllCatagoriesController)


export default TaskController;