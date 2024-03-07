import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";
import { deletetaskbody } from "../../types";




export default async function deleteTask({ id }: deletetaskbody) {

    try {
        const deleteTask = await TaskModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
        return {
            status: RESULT_STATUS.SUCCESS,
            message: "task deleted successfull",
            data: deleteTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)







    }
}