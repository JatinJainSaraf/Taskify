import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { DeletetHandlerType, deleteReturnDataType } from "@/types";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { taskId: string } }) {



    try {
        const deleteTaskRes = await fetch(`${API_URL}/task/deletetask?id=${params.taskId}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },

        });
        const deleteData: deleteReturnDataType = await deleteTaskRes.json()

        if (deleteData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(deleteData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while deleting the tasks."
            })
        }


    } catch (error) {
        console.error('Error while deleting task:', error);
    }
}
