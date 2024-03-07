import { NextResponse } from "next/server";
import { API_URL } from "@/config"
import { RegisterDataType } from "@/types";
import { cookies } from "next/headers";
import { RESULT_STATUS } from "@/constants";


export async function POST(req: Request) {
    try {
        const { name, email, password, contactNo, catagories } = await req.json()
        const registerRes = await fetch(`${API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, contactNo, catagories })
        });
        const registerData: RegisterDataType = await registerRes.json()
        if (registerData.status === 'Success') {
            cookies().set('token', registerData?.token as string)
            cookies().set('id', registerData?.userId as string)

            return NextResponse.json(registerData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while creating user."
            })
        }

    } catch (error) {
        console.error('Error registering user:', error);

    }
}