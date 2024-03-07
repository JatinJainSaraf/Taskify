import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";
import { edittaskbody } from "../../types";




export default async function editTask({ id, title, description, subCatagory, status, priority }: edittaskbody) {

    try {
        const editTask = await TaskModel.findByIdAndUpdate(id, { title, description, subCatagory, status, priority })
        return {
            status: RESULT_STATUS.SUCCESS,
            message: "task edited successfull",
            data: editTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)

    }
}