import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getoneTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request,  { params }: { params: { taskId: string }}) {
 


    try {
        const getoneTasksRes = await fetch(`${API_URL}/task/getone?id=${params.taskId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const getOneTaskData: getoneTasksReturnDataType = await getoneTasksRes.json()

        if (getOneTaskData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(getOneTaskData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while fetching one tasks."
            })
        }


    } catch (error) {
        console.error('Error while getting one task:', error);
    }
}
