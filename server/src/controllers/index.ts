import express, { Router } from "express";
import UserController from "./user";
import TaskController from "./task";

const router = express.Router();

router.use('/user', UserController)
router.use('/task', TaskController)

export default router;