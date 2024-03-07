import mongoose from "mongoose";
import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";


interface QueryParams {
    id: string;
}


export default async function getAllTask(req: QueryParams) {

    const userId = new mongoose.Types.ObjectId(req.id)
    try {
        const getAllTask = await TaskModel.find({ userId, isDeleted: false })

        return {
            status: RESULT_STATUS.SUCCESS,
            data: getAllTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)

    }
}