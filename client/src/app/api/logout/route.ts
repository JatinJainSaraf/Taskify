import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { RESULT_STATUS } from "@/constants";
export async function GET(req: Request) {
  try {
    cookies().delete("token");
    return NextResponse.json({
      status: RESULT_STATUS.SUCCESS,
      message: "Logout Successful",
    });
  } catch (error: any) {
    throw error;
  }
}