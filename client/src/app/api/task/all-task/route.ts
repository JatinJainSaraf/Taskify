import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

    const cookieStore = cookies()

    const userIdCookie = cookieStore.get('id')
    const id: string | undefined = userIdCookie?.value;



    try {
        const getTasksRes = await fetch(`${API_URL}/task/gettask?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const getTaskData: getTasksReturnDataType = await getTasksRes.json()

        if (getTaskData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(getTaskData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while fetching all tasks."
            })
        }






    } catch (error) {
        console.error('Error while adding new task:', error);
    }
}