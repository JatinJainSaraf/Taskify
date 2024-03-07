import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getallCatagoriesReturnDataType } from "@/types";
import { NextResponse } from "next/server";


export async function GET() {



    try {
        const getAllCatagoriesRes = await fetch(`${API_URL}/task/getallcatagories`, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache', 
            },

        });
        const getAllCatagoriesData: getallCatagoriesReturnDataType = await getAllCatagoriesRes.json()

        if (getAllCatagoriesData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(getAllCatagoriesData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while fetching all catagories."
            })
        }


    } catch (error) {
        console.error('Error while getting the catagoties.', error);
    }
}