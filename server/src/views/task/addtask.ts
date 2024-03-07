import TaskModel from "../../models/tasks";
import { addtaskbody } from "../../types";
import { RESULT_STATUS } from "../../constants";

export default async function addTask({ title, description, subCatagory, status, priority, userId }: addtaskbody) {


    try {
        const newTask = await TaskModel.create({ title, description, subCatagory, status, priority, userId })

        return {
            status: RESULT_STATUS.SUCCESS,
            message: "Task added succesfully",
            data: newTask,
            taskId: newTask._id
        }
    } catch (error) {
        console.error("🚀 ~ addtask ~ error:", error)
    }
}