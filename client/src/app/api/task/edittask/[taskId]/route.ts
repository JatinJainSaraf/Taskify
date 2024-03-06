import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { editTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";

export async function PUT(req: any, { params }: { params: { taskId: string } }) {



    try {
        const { title, description, subCatagory, status, priority } = await req.json()
        const payload = {

            title,
            description,
            subCatagory,
            status,
            priority
        };
        const editTasksRes = await fetch(`${API_URL}/task/edittask?id=${params.taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(payload)


        });
        const responseData: editTasksReturnDataType = await editTasksRes.json()

        if (responseData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(responseData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while editing the task"
            })
        }


    } catch (error) {
        console.error('Error while saving the edited  task:', error);
    }
}