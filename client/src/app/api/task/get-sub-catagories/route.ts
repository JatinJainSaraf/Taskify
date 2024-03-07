import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getSubCatagoriesReturnDataType, getTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

    const cookieStore = cookies()

    const userIdCookie = cookieStore.get('id')
    const id: string | undefined = userIdCookie?.value;

    try {
        const getSubCatagoriesRes = await fetch(`${API_URL}/user/find?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const getSubCatagoriesData: getSubCatagoriesReturnDataType = await getSubCatagoriesRes.json()

        if (getSubCatagoriesData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(getSubCatagoriesData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while getting the SubCatagories."
            })
        }






    } catch (error) {
        console.error('Error while adding new task:', error);
    }
}