import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";
import { getonetaskbody } from "../../types";




export default async function getOneTask({ id }: getonetaskbody) {

    try {
        const getOneTask = await TaskModel.findById(id, { isDeleted: false })
        return {
            status: RESULT_STATUS.SUCCESS,
            message: "get single task  successfully",
            data: getOneTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)
    }
}