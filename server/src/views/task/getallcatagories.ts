import mongoose from "mongoose";
import { RESULT_STATUS } from "../../constants";
import Category from "../../models/taskcatagory";




export default async function getAllCatagories() {
   

    try {
        const getAllCatagories = await Category.find()
        
        return {
            status: RESULT_STATUS.SUCCESS,
            data: getAllCatagories
        }
    } catch (error) {
        console.error("🚀 ~ getallCatagories ~ error:", error)

    }
}