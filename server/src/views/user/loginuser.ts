import jwt from "jsonwebtoken";
import { RESULT_STATUS } from "../../constants";
import UserModel from "../../models/user";
import { loginbody } from "../../types";
import { JWT_SECRET_KEY } from "../../../config";



export default async function loginUser({ email, password }: loginbody) {

    try {


        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return {
                status: RESULT_STATUS.FAILURE,
                message: "User not found"
            };
        }


        if (password !== existingUser.password) {
            return {
                status: RESULT_STATUS.FAILURE,
                message: "Invalid password"
            };
        }


        const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET_KEY as string, { expiresIn: '1h' });  // Generate JWT token

        return {
            status: RESULT_STATUS.SUCCESS,
            message: "Login successful",
            userId: existingUser._id,
            token: token

        };
    } catch (error: any) {
        console.error("🚀 ~ loginUser ~ error:", error)

    }
}