import Category from "../../models/taskcatagory";
import { RESULT_STATUS } from "../../constants";
import UserModel from "../../models/user";

import mongoose from "mongoose";



export default async function getUser(id:string) {



    const userId = new mongoose.Types.ObjectId(id)

    try {
        const getUser = await UserModel.findById({ _id: userId, isDeleted: false })
     
        if (getUser && getUser.catagories) {
            const getCatagories = await Category.findById({ _id: getUser.catagories, isDeleted: false })



            return {
                status: RESULT_STATUS.SUCCESS,
                message: "finding user's catagoryied successful",
                data: getCatagories
            };
        } else {
            return {
                status: RESULT_STATUS.FAILURE,
                message: "user's catagoryied not found",
            }
        }
    } catch (error: any) {
        console.error("🚀 ~ getuser ~ error:", error)

    }
}